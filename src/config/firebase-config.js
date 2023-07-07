// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: "wheres-waldo-64002.firebaseapp.com",
  projectId: "wheres-waldo-64002",
  storageBucket: "wheres-waldo-64002.appspot.com",
  messagingSenderId: "691271556580",
  appId: "1:691271556580:web:701852daba4d0d97b47bf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);