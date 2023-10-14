# Spring Boot Boostrap

## Description

This document provides a brief overview of a Spring Boot REST API project. The project aims to create a web-based API using Spring Boot for building reactive, data-driven applications.

## Requirements

- [Java 17.x](https://www.oracle.com/java/technologies/javase-downloads.html)

## Getting Started

1. Clone the repository

```bash
git clone git@github.com:charley04310/spring-bootsrap-restAPI.git
```

2. Go to `Worker` directory

```bash
cd worker
```

3. Run the application

```bash
./gradlew bootRun
```

### Exception Handling

The API provide a global exception handler to handle all exceptions coming from the application and his dependencies. The exception handler work with `ErrorResponse` class to return a response with the following format:

```json
{
  "errorMessages": ["Error message 1", "Error message 2"],
  "statusCode": 404
}
```
