import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyA4AMBIQlQSpMtjlSBxHadT0G99BFHbAwM",
    authDomain: "modeul-9.firebaseapp.com",
    projectId: "modeul-9",
    storageBucket: "https://modeul-9-default-rtdb.asia-southeast1.firebasedatabase.app",
    messagingSenderId: "252399738676",
    appId: "1:252399738676:web:8e2d6693f0d2bccbbe4f61"
});

const FIREBASE = firebase;

export default FIREBASE;
