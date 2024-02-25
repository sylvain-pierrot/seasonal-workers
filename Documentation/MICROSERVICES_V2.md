# Seasonal Workers - Architecture

**_last update:_** 2022-02-24

- [Seasonal Workers - Architecture](#seasonal-workers---architecture)
  - [1. Definition](#1-definition)
    - [1.1. What are microservices?](#11-what-are-microservices)
      - [1.1.1. Independently deployable](#111-independently-deployable)
      - [1.1.2. Loosely coupled](#112-loosely-coupled)
        - [(i) Runtime coupling and availability](#i-runtime-coupling-and-availability)
        - [(ii) Design-time coupling and development velocity](#ii-design-time-coupling-and-development-velocity)
    - [1.2. When you outgrow your monolithic architecture](#12-when-you-outgrow-your-monolithic-architecture)
  - [2. Architecture Overview](#2-architecture-overview)
    - [2.1. Related patterns](#21-related-patterns)
    - [2.2. Design architecture pattern about *Seasonal Workers*](#22-design-architecture-pattern-about-seasonal-workers)
    - [2.1. Workflow step-by-step](#21-workflow-step-by-step)
  - [4. Architecture Overview](#4-architecture-overview)
    - [Payload and interface](#payload-and-interface)
        - [NestJS API Gateway:](#nestjs-api-gateway)
        - [NATS Server:](#nats-server)
        - [Profile Service with MinIO:](#profile-service-with-minio)
        - [Notification Service:](#notification-service)
        - [Ad Service:](#ad-service)
    - [Communication Protocols](#communication-protocols)
    - [Authentication and security](#authentication-and-security)
    - [Dynamic Messaging, IP Resolution, and Load Balancing](#dynamic-messaging-ip-resolution-and-load-balancing)
    - [Database per Service](#database-per-service)
    - [Resilience Considerations](#resilience-considerations)
  - [Shared Interface with Protocol Buffers](#shared-interface-with-protocol-buffers)



## 1. Definition

### 1.1. What are microservices?

Microservices - also known as the **microservice architecture** - is an architectural style that structures an application as a collection of services that are:

- [Independently deployable](#111-independently-deployable)
- [Loosely coupled](#112-loosely-coupled)

Services are typically organized around business capabilities. Each service is often owned by a single, small team.

The microservice architecture enables an organization to deliver large, complex applications rapidly, frequently, reliably and sustainably - a necessity for competing and winning in today’s world.

#### 1.1.1. Independently deployable

A meaningful definition of *independently deployable* is a service that is packaged as a deployable or executable unit and is production-ready after it has been tested in isolation. Such a service has its own source code repository and deployment pipeline. The deployment pipeline tests the service in isolation by using test doubles for its collaborators along with consumer-driven contract testing. What emerges from the deployment pipeline that is a service that can and should be deployed into production.

If you need to test your service with other services in order to verify that it’s production ready then it is not independently deployable. Moreover, you might want to consider putting those services in a single repository (as in our case). It ensures that the output of your single deployment pipeline is actually production ready. It will also eliminate the complexity of developing across multiple repositories.

An important benefit of an independently deployable service is that it accelerates the deployment pipeline. It eliminates the need to slow, brittle, and complex end-to-end tests of multiple services. It also eliminates the need for teams to coordinate their and potentially obstruct one another.

<div align="center">
  <img src="https://microservices.io/i/posts/testable-in-isolation.png" width=700 /> 
</div>

#### 1.1.2. Loosely coupled

There’s actually two different types of coupling:

- [runtime coupling - influences availability](#i-runtime-coupling-and-availability)
- [design-time coupling - influences development velocity](#ii-design-time-coupling-and-development-velocity)

Minimizing design-time coupling and minimizing runtime coupling are two of the five dark matter forces that shape a microservice architecture.

##### (i) Runtime coupling and availability

Runtime coupling between services is the degree to which the availability of one service is affected by the availability of another service. Or to be more precise, it’s degree to which the availability of an operation implemented by one service is affected by the availability of another service.

##### (ii) Design-time coupling and development velocity

The degree of design-time coupling between a pair of software elements - classes…services - is the likelihood that they need to change together for the same reason. Design-time coupling between services in a microservice architecture is especially problematic.

### 1.2. When you outgrow your monolithic architecture

Let’s imagine that you responsible for a business critical business application that has a monolithic architecture and you are struggling to meet the needs of the business. Should you consider migrating to a microservice architecture? The short answer is that it depends.

It’s important to make the most of your monolithic architecture, e.g. adopt DevOps, and reorganize into loosely coupled, small teams.

In many cases, once you have embraced the success triangle, your monolithic architecture is sufficiently loosely coupled, testable and deployable to enable rapid software delivery.

But sometimes an application can outgrow its monolithic architecture and become an obstacle to rapid, frequent and reliable software delivery. This typically happens when the application becomes large and complex and is developed by many teams. For example, its deployment pipeline become a bottleneck. When this occurs, you should consider migrating to microservices.

<div align="center">
  <img src="https://microservices.io/i/posts/pattern-thumbnails/thumbnail-Monolith_vs_Microservices.png" width=600 /> 
</div>

## 2. Architecture Overview

Seasonal-Workers backend is a proof of concept (POC) that follow a microservices software architecture. While its implementation remains modular, the adoption of microservices isn't solely a response to the inadequacy of monolithic architecture. Instead, it's primarily driven by the need for prototyping and experimentation. 


### 2.1. Related patterns

There are many patterns related to the Microservices architecture pattern. Here's a diagram you can find on this [link](https://microservices.io/patterns/microservices.html) that summarizes the implementation choices of a microservices architecture.

<div align="center">
  <img src="https://microservices.io/i/PatternsRelatedToMicroservices.jpg" width=700 />
</div>

### 2.2. Design architecture pattern about *Seasonal Workers*

<div align="center">
  <img src="./assets/schema_microservices_v2.jpg" width=700 />
</div>

Above is the final model of the microservices architecture we've implemented. This design offers many advantages, and we'll see how certain concepts have been integrated to achieve a lightweight yet complex architecture. The design took several key factors into account, with the aim of simulating and achieving industry standards such as those of Amazon and Netflix. The architecture of the Seasonal Workers backend was developed in depth to ensure optimization from Layer 4 (Transport) of the OSI model through to Layer 7 (Application). Data consistency across the entire backend communication flow is a top priority; no information is to be lost. This means that every request must be processed, even in the event of an error.

1. **Ingress**: How do the clients access the individual services?

The requirement is to implement an API gateway that is the single entry point for all clients. The API gateway handles requests in one of two ways. Some requests are simply proxied/routed to the appropriate service. It handles other requests by fanning out to multiple services. Rather than provide a one-size-fits-all style API, the API gateway can expose a different API for each client. 

2. **Security**: How to communicate the identity of the requestor to the services that handle the request?

The API Gateway authenticates requests by intercepting an access token (e.g., JSON Web Token) and querying Keycloak to determine the corresponding role in the Identity Access Management system and filter by access rights. This process ensures secure identification of the requester. Additionally, a service may include the access token in its requests to other services, facilitating secure communication between services.

3. **Communication**: How do services in a microservice architecture communicate?

Communication is the fundamental element upon which several constraints rely. All entities must speak the same language, and messages should be clear and easy to process. If a new entity joins the communication, its integration should be seamless. When one entity communicates with another, should the response be immediate, or can it be asynchronous?

It's clear that this aspect constitutes the core of microservices architecture and involves making compromises. 

Inter-service and API Gateway - services communication is based on [NATS](https://docs.nats.io). It is a high perfomance messaging and connective fabric. It uses Subject-Based Messaging. A subject is just a string of characters that form a name which the publisher and subscriber can use to find each other. There are 2 kinds of fonctionalities, synchrone messgaing (Core NATS) and asynchrone messaging, in other terme, persistance messaging (JetStream).

There are several different styles of communication:

- Publish/subscribe - a service publishes a message to zero or more recipients
- Request-reply - a service sends a request message to a recipient and expects to receive a reply message promptly
- Queue Groups

- Notifications - a sender sends a message a recipient but does not expect a reply. Nor is one sent.
- Request/asynchronous response - a service sends a request message to a recipient and expects to receive a reply message eventually
- Publish/asynchronous response - a service publishes a request to one or recipients, some of whom send back a reply

1. **Discovery**: How does the client of a service - the API gateway or another service - discover the location of a service instance?

The backend comprises two distinct components: the Identity and Access Management segment, powered by Keycloak, and the application logic segment. The backend is publicly accessible through Keycloak (directly) and by an API gateway.

Under the hood, behind the API gateway, the entire backend is powerded by high performance messaging and connective fabric, [NATS](https://docs.nats.io/). A connective technology is responsible for addressing, discovery and exchanging of messages that drive the common patterns in distributed systems; asking and answering questions, aka services/microservices, and making and processing statements, or stream processing.

The Database per Service pattern describes how each service has its own database in order to ensure loose coupling.



### 2.1. Workflow step-by-step

1. The user sends a request to the Keycloak server to get an token access or if he already has one, he sends it to the API Gateway (step :3).

2. The Keycloak server sends back an access token to the user, to get more information about authentification workflow here #TODO :(define auth schema).

3. The user sends a request to the NestJS API Gateway with his access token to get specific ressources.

4. The API Gateway sends the access token to the Keycloak server to check its validity and performed many controles as Role-based access control (RBAC), Data validation, etc.

5. Keycloack server sends back the validity status of the token to the API Gateway.

6. If the token is valid, the API Gateway sends as nats client the request/reply to NATS server in specific subject.

7. Then all nats client (microservices) which are subscribed to the specific subject, will receive the request and send back the reply to NATS server and the API Gateway will receive the reply.

## 4. Architecture Overview





### Payload and interface




In this modern web development ecosystem, the microservices architecture has become a cornerstone for building scalable and maintainable applications. Our system comprises several independent services seamlessly working together to deliver a robust and efficient backend.

Our backend system follows a microservices approach, ensuring flexibility and scalability. Here's a quick look at the key components:

##### NestJS API Gateway:

- Manages API access, authentication, and load balancing.
- Acts as a central entry point for client-server communication.

##### NATS Server:

- Enables fast and lightweight messaging between microservices.
- Supports real-time updates and ensures efficient event handling.

##### Profile Service with MinIO:

- Handles user profiles, CVs, and profile photos.
- Utilizes MinIO for secure and scalable file storage.

##### Notification Service:

- Provides real-time updates on seasonal job offer statuses.
- Ensures timely and efficient delivery of notifications.

##### Ad Service:

- Central hub for managing advertisements, experiences, and recommendations.
- Enhances user experience through personalized content.

### Communication Protocols

All communication between clients and internal services is facilitated through the `API Gateway` using secure `HTTPS` calls. This ensures a safe and encrypted channel for data exchange, maintaining the integrity and confidentiality of information. Clients can confidently interact with our system, knowing that their data is transmitted securely over the web.

### Authentication and security

Keycloak serves as the authentication service, managing user authentication and generating secure access tokens. In our architecture, Keycloak is deployed as a separate service, using `OpenID Connect (OIDC)` to authenticate users and generate access tokens. This implementation ensures that only authorized users can access resources, providing robust security and compatibility with the OAuth2 specification. From backend side we use `NestJs-keycloack-client` to verify the authenticity of access tokens in each request. This ensures that only authenticated and authorized users can access the ressource.

### Dynamic Messaging, IP Resolution, and Load Balancing

Our microservices talk to each other using NATS, a quick and simple messaging system. NATS helps them chat fast and without getting too tangled up with each other.

NATS also helps out with figuring out where to find each service. It does this cleverly, adapting to changes in our system without needing a lot of manual fuss.

And here's the cool part – NATS makes sure no one service gets too overloaded with work. It does this using subscribers and queues, kind of like making sure everyone in a group gets a fair share of the load. This makes our whole system work better and smoother. So, NATS isn't just good at chatting; it's also like a friendly traffic cop, making sure everyone moves along nicely.

### Database per Service

The "Database per Service" model is employed, meaning that each service is responsible for its own database. Each service has its own REST API for interacting with its database. This provides complete data isolation between services, facilitating maintenance and scalability. The databases can be of different types depending on the needs, such as SQL, NoSQL, etc.

> **_NOTE_**
> The "Database per Service" approach, while providing data isolation and scalability, can also lead to the challenge of maintaining multiple databases. This can result in increased administrative overhead, especially when it comes to backup, monitoring, and data synchronization across services. It's essential to carefully manage and maintain multiple databases to ensure data consistency and performance.

### Resilience Considerations

In our current architecture, we have implemented Docker Compose to manage our microservices. While the services are configured to restart always in case of failures, it's essential to address a potential resilience issue. Events that are received during system failures are not currently persistently recorded within the system. This means that any incoming events during such incidents might be lost forever. To enhance the system's resilience and ensure that no critical data is lost, we may need to implement mechanisms like event logging and message queuing systems that can capture and retain incoming events, even in the face of unexpected failures. This will allow us to recover and process any missed events, ensuring data integrity and a more resilient architecture.

## Shared Interface with Protocol Buffers

- We've adopted Protocol Buffers (Protobuf) for shared interfaces across all services.
- Enables seamless communication by utilizing Protobuf's serialization and deserialization methods.

This addition ensures consistent and efficient data exchange between microservices, contributing to a cohesive and streamlined backend architecture.
