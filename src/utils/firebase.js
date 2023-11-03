// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqG9CxPag8fmeJotXES5yGZv4qh744yTc",
  authDomain: "netflix-12ea1.firebaseapp.com",
  projectId: "netflix-12ea1",
  storageBucket: "netflix-12ea1.appspot.com",
  messagingSenderId: "162942561715",
  appId: "1:162942561715:web:710a45169a5b341c61efc6",
  measurementId: "G-N5NMBJJT8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();