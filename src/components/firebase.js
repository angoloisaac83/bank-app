// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs9oLz6CgtvrV-zsnjPvRvluMK-4BVkGY",
  authDomain: "bank-app-9de63.firebaseapp.com",
  projectId: "bank-app-9de63",
  storageBucket: "bank-app-9de63.appspot.com",
  messagingSenderId: "715855032286",
  appId: "1:715855032286:web:d6c3163c217db59596774f",
  measurementId: "G-6YSNJDW8Z2"
};

// Initialize Firebase
const db = getFirestore(app);

export { db };