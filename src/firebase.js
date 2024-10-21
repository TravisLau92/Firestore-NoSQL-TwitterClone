// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEXdmm9QaYrpBtZMdmQ6iJLO5VpCv6Y2g",
  authDomain: "twitter-app-4df4f.firebaseapp.com",
  projectId: "twitter-app-4df4f",
  storageBucket: "twitter-app-4df4f.appspot.com",
  messagingSenderId: "1038652632182",
  appId: "1:1038652632182:web:e95487561e5615a75ec357"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);