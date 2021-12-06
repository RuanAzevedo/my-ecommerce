import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAdRrS9E-i0oD90JA815sKQzlzGF6tMHkY",
  authDomain: "my-ecommerce-a7b91.firebaseapp.com",
  projectId: "my-ecommerce-a7b91",
  storageBucket: "my-ecommerce-a7b91.appspot.com",
  messagingSenderId: "29055963802",
  appId: "1:29055963802:web:d77b534d8f2e19815e0523",
  measurementId: "G-GHR9PGE26Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
