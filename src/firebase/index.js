import  firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACDrzov_MPZtR3064GWhpn42G6MkFICrI",
    authDomain: "retrogames-duarte.firebaseapp.com",
    projectId: "retrogames-duarte",
    storageBucket: "retrogames-duarte.appspot.com",
    messagingSenderId: "225049405106",
    appId: "1:225049405106:web:5813db941945cfadd34bab",
    measurementId: "G-TW5F6P71Q9"
  };
  
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)