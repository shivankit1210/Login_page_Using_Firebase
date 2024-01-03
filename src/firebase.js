import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCCt1SmpW9UnNmf6j1o2PwNxCYI5sJwfqY",
    authDomain: "login-page-f8d94.firebaseapp.com",
    projectId: "login-page-f8d94",
    storageBucket: "login-page-f8d94.appspot.com",
    messagingSenderId: "909844568492",
    appId: "1:909844568492:web:727ae4827051f72c6e0209",
    databaseURL:"https://login-page-f8d94-default-rtdb.firebaseio.com"
  };

  export const app= initializeApp(firebaseConfig);