# Overview

The Ads Microservice is responsible for storing and managing Ads. It provides CRUD (Create, Read, Update, Delete) operations for three types of ads:

- EXPERIENCES
- AVAILABILITIES
- JOB OFFERS

The microservice is built using the NestJS framework and is written in TypeScript, his also using Protobuf and [NATS](https://nats.io/) to standardize data structures for communication between microservices.

## Installation

```bash
$ npm ci
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
