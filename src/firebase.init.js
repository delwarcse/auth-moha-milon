// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChuv_MTi7d35irU8s5ZCRXzxKOSkHFUYw",
  authDomain: "auth-moha-milon-a171d.firebaseapp.com",
  projectId: "auth-moha-milon-a171d",
  storageBucket: "auth-moha-milon-a171d.firebasestorage.app",
  messagingSenderId: "434524787252",
  appId: "1:434524787252:web:e7473660fd7bcefd7b3061"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);