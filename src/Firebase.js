// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANijwRPMPa3k0uugWMUJ7XfeTuh2hLWyo",
  authDomain: "todo-app-4af0c.firebaseapp.com",
  projectId: "todo-app-4af0c",
  storageBucket: "todo-app-4af0c.appspot.com",
  messagingSenderId: "954832675651",
  appId: "1:954832675651:web:47877847471418cef485f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)