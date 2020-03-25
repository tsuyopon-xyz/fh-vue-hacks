import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC150PxS8rIAtk40ypRLRrVM5yxwkMHM9o",
  authDomain: "vue-hacks2.firebaseapp.com",
  databaseURL: "https://vue-hacks2.firebaseio.com",
  projectId: "vue-hacks2",
  storageBucket: "vue-hacks2.appspot.com",
  messagingSenderId: "1088920753577",
  appId: "1:1088920753577:web:53c963f14cd4da0cd6e0b8",
  measurementId: "G-VWWKTVM3LR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const dbMessages = db.collection('messages');