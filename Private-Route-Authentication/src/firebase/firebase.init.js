// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1_2RRAPjoUX5fpPGll1VE5kEjkmf6GdE",
  authDomain: "fir-email-auth-953b4.firebaseapp.com",
  projectId: "fir-email-auth-953b4",
  storageBucket: "fir-email-auth-953b4.firebasestorage.app",
  messagingSenderId: "1037439073836",
  appId: "1:1037439073836:web:923fc4479a76910851db89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)