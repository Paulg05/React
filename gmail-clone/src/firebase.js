import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3xhaKt4GwccK78xXlZEjrTubCZhk9qYk",
  authDomain: "clone-yt-65a74.firebaseapp.com",
  projectId: "clone-yt-65a74",
  storageBucket: "clone-yt-65a74.appspot.com",
  messagingSenderId: "433688596700",
  appId: "1:433688596700:web:8ecc58b6ab404a5d86e419",
};

//connects the frontend to the backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
