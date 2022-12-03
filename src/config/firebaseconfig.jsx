import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDRtNkcOW8lGWnT-UtEWIoyuMhvDz8A56k",
    authDomain: "todo-7fe26.firebaseapp.com",
    projectId: "todo-7fe26",
    storageBucket: "todo-7fe26.appspot.com",
    messagingSenderId: "268156296230",
    appId: "1:268156296230:web:8f1890dcdc3a7b3325dae7"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;