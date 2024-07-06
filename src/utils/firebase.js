// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhIns6LmIEU1ZVLkqHDu7cxQwL4ZZtojw",
  authDomain: "netflixgpt-5c301.firebaseapp.com",
  projectId: "netflixgpt-5c301",
  storageBucket: "netflixgpt-5c301.appspot.com",
  messagingSenderId: "867782918543",
  appId: "1:867782918543:web:849d7a99e5ca16a1254bfa",
  measurementId: "G-DJ9LS6C959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();