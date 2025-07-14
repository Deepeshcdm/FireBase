// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuZLCS6h2GmxTaVvypkoYn68oSg2FaYyo",
  authDomain: "collaborative-cutlery.firebaseapp.com",
  projectId: "collaborative-cutlery",
  storageBucket: "collaborative-cutlery.firebasestorage.app",
  messagingSenderId: "795928038811",
  appId: "1:795928038811:web:858ca2512a9d7c8e6ee53e",
  measurementId: "G-574P0VLJ76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
