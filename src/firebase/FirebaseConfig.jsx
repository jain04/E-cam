// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBOwUxDIRQ3PmsS6WRWzVsKTcMnL9yDcf8",
  authDomain: "ecommerce-dae1e.firebaseapp.com",
  projectId: "ecommerce-dae1e",
  storageBucket: "ecommerce-dae1e.appspot.com",
  messagingSenderId: "947397872422",
  appId: "1:947397872422:web:e44a8f30b4ae4b11c90fe7",
  measurementId: "G-GW79QNXYSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const analytics = getAnalytics(app);
export {fireDB,auth } ;