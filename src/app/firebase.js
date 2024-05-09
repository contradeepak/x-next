// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-v2-1e6e1.firebaseapp.com",
  projectId: "x-next-v2-1e6e1",
  storageBucket: "x-next-v2-1e6e1.appspot.com",
  messagingSenderId: "1050717612250",
  appId: "1:1050717612250:web:12fcbf02c59e93516e9de3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);