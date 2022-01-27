import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAGXvZNG4Arxequ_L1CxzaYpKHZgYB20B0",
  authDomain: "crwn-db-9941e.firebaseapp.com",
  projectId: "crwn-db-9941e",
  storageBucket: "crwn-db-9941e.appspot.com",
  messagingSenderId: "373364177669",
  appId: "1:373364177669:web:a4c01ebeae034d9064d56c",
  measurementId: "G-RH6HCB6861",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
