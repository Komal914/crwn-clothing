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

export const createuserProfileDocument = async (userAuth, additionalData) => {
  //if User == null
  if (!userAuth) {
    return;
  }
  //user exists

  //creates a user Documement Refrence to database -> to gets the users
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //get request to database, we use await to make sure this is done before moving on
  //gets the user ID from database
  const snapShot = await userRef.get();
  //if snapShot does not exist (exists = false in console, meaning there is not dta in my database)
  if (!snapShot.exists) {
    //create a piece of data through userRef in database
    //create a user by using userAuth object which we used to authenticate with google sign in
    const { displayName, email } = userAuth;
    const createdAt = new Date(); //when we made that document

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
