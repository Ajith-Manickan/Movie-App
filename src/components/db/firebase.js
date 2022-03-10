import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxfn4aMOor0_usRISpZRHizNZaw2m37No",
  authDomain: "movieapp-56e9e.firebaseapp.com",
  databaseURL: "https://movieapp-56e9e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movieapp-56e9e",
  storageBucket: "movieapp-56e9e.appspot.com",
  messagingSenderId: "699386372917",
  appId: "1:699386372917:web:d271354649b9fa4869a27c",
  measurementId: "G-5FP4QL933D",
});

const DB = firebaseApp.firestore();

export default DB;
