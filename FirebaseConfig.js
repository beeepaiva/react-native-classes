// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaZrJ_T3AI_FOzEE9tPEN0rFcAh7R8jJw",
  authDomain: "projetox-68d24.firebaseapp.com",
  projectId: "projetox-68d24",
  storageBucket: "projetox-68d24.firebasestorage.app",
  messagingSenderId: "223994030739",
  appId: "1:223994030739:web:3438d1ef812022db063b66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);