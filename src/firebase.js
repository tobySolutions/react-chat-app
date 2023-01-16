// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXnalfUyqPaK9gZH59-hSxdUI-0rS4U6w",
  authDomain: "react-chat-9b1cd.firebaseapp.com",
  projectId: "react-chat-9b1cd",
  storageBucket: "react-chat-9b1cd.appspot.com",
  messagingSenderId: "939666090077",
  appId: "1:939666090077:web:d5de51b1d208d12067c5b4",
  measurementId: "G-KHG8QLBJQ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
