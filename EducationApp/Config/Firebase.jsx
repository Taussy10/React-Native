// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy5Pt_lnG-eTw5YhCLJ2fbMncyQOqdu8Y",
  authDomain: "educationapp-f84d5.firebaseapp.com",
  projectId: "educationapp-f84d5",
  storageBucket: "educationapp-f84d5.appspot.com",
  messagingSenderId: "1086526047236",
  appId: "1:1086526047236:web:5bb034086dfdb8e66ba151",
  measurementId: "G-7FVY5GEP7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)