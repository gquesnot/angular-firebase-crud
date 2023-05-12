# Angular Firebase CRUD Application

This project is a simple CRUD application built with Angular and Firebase. It includes features such as user authentication and protected routes.

## Features

- Firebase Authentication (Sign-In, Sign-Up)
- CRUD operations with Firebase Firestore
- Angular Reactive Forms with Validation
- Angular Routing and Guards
- Dialog usage for creating and updating data

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)

## Setup
Clone the repository to your local machine:

```bash
git clone https://github.com/gquesnot/angular-firebase-crud.git
```

Navigate into the project directory:

  ```bash
  cd angular-firebase-crud
  ```

Install the dependencies:

  ```bash
  npm install
  ```


## Running the Application
Start the development server with the following command:

  ```bash
  ng serve
  ```
Navigate to http://localhost:4200/ in your browser. The app will automatically reload if you change any of the source files.

## Deployment

```bash
ng build --prod
```
This will create a dist/ directory with the compiled project. You can then deploy this directory to any static file server or configure Firebase Hosting.

