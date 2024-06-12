// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtgpouwoTdzMejde-ugaHbMkY9TAu1oyk",
    authDomain: "galloflix-a30f5.firebaseapp.com",
    projectId: "galloflix-a30f5",
    storageBucket: "galloflix-a30f5.appspot.com",
    messagingSenderId: "492428232336",
    appId: "1:492428232336:web:d286e80c16194dc26f7a15"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);
export { db, auth };

