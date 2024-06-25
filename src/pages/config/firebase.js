// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyxYZV7PSfduyF2v_FmQPHlNgbTWMzVkI",
  authDomain: "java-form-691ba.firebaseapp.com",
  projectId: "java-form-691ba",
  storageBucket: "java-form-691ba.appspot.com",
  messagingSenderId: "270627027976",
  appId: "1:270627027976:web:f3ca9258147cd2b6a065bd",
  measurementId: "G-5XV65ZVFVF",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)