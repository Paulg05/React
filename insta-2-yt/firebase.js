// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBWvQTHF7sa8G3Noy8M8RKKG7ew1YeVB0",
  authDomain: "insta2-yt.firebaseapp.com",
  projectId: "insta2-yt",
  storageBucket: "insta2-yt.appspot.com",
  messagingSenderId: "556189538307",
  appId: "1:556189538307:web:4d65652948ac58fe961636",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
