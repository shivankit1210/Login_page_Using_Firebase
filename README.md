# ReactJS Firebase Authentication Example

This project demonstrates a simple sign-up and sign-in page built using ReactJS with Firebase for authentication.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User sign-up with email and password
- User sign-in with email and password
- Firebase authentication integration
- Responsive and user-friendly design

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js and npm (Node Package Manager)
- Git
- Firebase account and a project set up

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shivankit1210/Login_page_Using_Firebase.git
   cd react-firebase-authentication
   
2. Install dependencies
   npm install

## Configuration

Create a Firebase project and configure the Firebase settings in your project:
1. Go to the Firebase Console.
2. Create a new project.
3. Set up Firebase Authentication with Email/Password.
4. Copy the Firebase configuration object from your project settings.

   Update your project with the Firebase configuration:

// src/firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
// Paste your Firebase configuration here
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;


## Usage

1. Start the development server: (npm start)
2. Open your browser and navigate to http://localhost:3000.
3. Sign up and sign in to explore the authentication features.

