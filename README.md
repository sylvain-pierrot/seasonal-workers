# Seasonal Workers

<img alt="logo" src="Documentation/assets/logo.png" width=120 />

---

## React Native App

Welcome to the React Native Seasonal Workers App project, developed as part of our school project. This mobile application is designed to meet the needs of seasonal workers and employers. It allows seasonal workers to find a job and employers to find seasonal workers. The application is availbale in 2 languages, including English, French.

**Note:** You can find an figma prototype of the app [here](https://www.figma.com/file/CkqaUII8RfNxNRs2pIAQil/Seasonal?type=design&node-id=0%3A1&mode=design&t=dnVQFbKSWEO0DaKg-1).

## Requirements

- [Node.js](https://nodejs.org/en/) v19.0 or higher
- [Android Studio](https://developer.android.com/studio)

## Getting Started

### Running the mobile app (Android)

Before running the app, make sure you have an Android emulator running, or a device connected to your computer. If you don't have one, you can follow the instructions [here](https://developer.android.com/studio/run/emulator) to set up an emulator.

1. Export ANDROID_HOME or add to your .bashrc file:

   ```bash
   export ANDROID_HOME=$HOME/Android/Sdk
   ```

2. Modify `.env.development`

   ```bash
   EXPO_PUBLIC_API_URL="<YOUR_BASE_URL>/api"
   EXPO_PUBLIC_OIDC_DISCOVERY_URL="<YOUR_BASE_URL>/realms/<YOUR_REALM>"
   EXPO_PUBLIC_OIDC_CLIENT_ID="<YOUR_CLIENT>"
   ```

3. Install dependencies from `package_lock.json`:

   ```bash
   npm ci
   ```

4. Then run the app:

   ```bash
   npm start
   ```

   Once the server is running, you can press `a` to run the app on Android emulator or device.

## Running microservices

 During this project, we explored different approaches to shaping our microservices architecture. Initially, we conducted a Proof of Concept (POC) using a **Java stack** with the native Spring gateway and a service discovery mechanism, all communicating solely via HTTP (see [Microservice V1](https://github.com/sylvain-pierrot/seasonal-workers/blob/main/Documentation/MICROSERVICES_V1.md)). Subsequently, we made a significant shift to adopt a **message broker-oriented stack**, using the NATS server and NATS client for each service. This decision brought numerous advantages. Additionally, we implemented **PROTOBUF** to establish shared interfaces across all services (see [Microservice V2](https://github.com/sylvain-pierrot/seasonal-workers/blob/main/Documentation/MICROSERVICES_V2.md)).

From the `Backend` directory, you can run the microservices using the following commands:

```bash
docker-compose up -d
```

You can also refer to all readme files in the `Backend` directory for more information.
