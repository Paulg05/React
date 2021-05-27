import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgWHYVroV2aynDi6Slg-m83KdFQM5e68s",
  authDomain: "robinhood-investments.firebaseapp.com",
  projectId: "robinhood-investments",
  storageBucket: "robinhood-investments.appspot.com",
  messagingSenderId: "551130909816",
  appId: "1:551130909816:web:f17182f07d76fc201fb18d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
