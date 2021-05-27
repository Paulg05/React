import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRM2kWvXO0_DvsZC1V8Gjf1q7NSXddm50",
  authDomain: "snapchat-demo-clone.firebaseapp.com",
  projectId: "snapchat-demo-clone",
  storageBucket: "snapchat-demo-clone.appspot.com",
  messagingSenderId: "264874529413",
  appId: "1:264874529413:web:0b038867ddab641fd38fec",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const storage = firebase.storage();
//allows for google popup provider that asks for auth
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
