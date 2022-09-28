// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7AXa8z4SiPbuapGyGdg0I9740DbIrScs",
  authDomain: "practica6-5eb51.firebaseapp.com",
  projectId: "practica6-5eb51",
  storageBucket: "practica6-5eb51.appspot.com",
  messagingSenderId: "650343267155",
  appId: "1:650343267155:web:57df4937d7741efa9c3fa6",
  measurementId: "G-YPV9VJGB6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);