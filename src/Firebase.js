// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC5z_XksNv7XKS0Pv-lErZUfVgOvWewWHs",
  authDomain: "todo-app-95fb6.firebaseapp.com",
  projectId: "todo-app-95fb6",
  storageBucket: "todo-app-95fb6.appspot.com",
  messagingSenderId: "805089513881",
  appId: "1:805089513881:web:dda268a01d8d24781d0308"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)