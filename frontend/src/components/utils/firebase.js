// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR6td5NXIxewbqgzHt3_LFKXS2LdaqBBk",
  authDomain: "calico-ecom.firebaseapp.com",
  projectId: "calico-ecom",
  storageBucket: "calico-ecom.firebasestorage.app",
  messagingSenderId: "344295573946",
  appId: "1:344295573946:web:5f8dfe2c127b385c713583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;