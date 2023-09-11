import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEqzSF8CKggnpAWjTll-QMlA_mwkb4izI",
    authDomain: "g-linktree.firebaseapp.com",
    projectId: "g-linktree",
    storageBucket: "g-linktree.appspot.com",
    messagingSenderId: "152859457688",
    appId: "1:152859457688:web:df5e4432197bb084ca78ed"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

