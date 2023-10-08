# Seasonal Workers

<img alt="logo" src="Documentation/assets/logo.png" width=120 />

---

## React Native App

Welcome to the React Native Seasonal Workers App project, developed as part of our school project. This mobile application is designed to meet the needs of seasonal workers and employers. It allows seasonal workers to find a job and employers to find seasonal workers. The application is availbale in 2 languages, including English, French.

**Note:** You can find an figma prototype of the app [here](https://www.figma.com/file/CkqaUII8RfNxNRs2pIAQil/Seasonal?type=design&node-id=0%3A1&mode=design&t=dnVQFbKSWEO0DaKg-1).

## Backend architecture

The backend of our application is designed with a microservices (MS) architecture to efficiently manage various aspects of the system and will be accessible through an API gateway.

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

2. Install dependencies from `package_lock.json`:

   ```bash
   npm ci
   ```

3. Then run the app:

   ```bash
   npm start
   ```

   Once the server is running, you can press `a` to run the app on Android emulator or device.
