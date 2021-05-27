import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDj4k8ER5_peNhek9V634IhdLmLiL4Qxh8",
  authDomain: "react-todo-app-d71ca.firebaseapp.com",
  databaseURL: "https://react-todo-app-d71ca.firebaseio.com",
  projectId: "react-todo-app-d71ca",
  storageBucket: "react-todo-app-d71ca.appspot.com",
  messagingSenderId: "755491718133",
  appId: "1:755491718133:web:675d4b03e13ee6d508d6bc",
  measurementId: "G-6XHDSVBYFE",
});

const db = firebaseApp.firestore();

export default db;
