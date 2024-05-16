import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ... Your Configuration Here
  apiKey: "AIzaSyDDhncQ-zmbOgwkcUqlwDHExKCLGCQIM-Q",
  authDomain: "class-work-c5bee.firebaseapp.com",
  projectId: "class-work-c5bee",
  storageBucket: "class-work-c5bee.appspot.com",
  messagingSenderId: "156765701708",
  appId: "1:156765701708:web:d543605b3a4218c9d5d6e9"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// remember to export this
export const auth = getAuth(app);


// TODO:Initialize Firebase Authentication and get a reference to the service

