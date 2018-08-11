import firebase from 'firebase';
//DEBUG
window.firebase = firebase;

var config = {
  apiKey:  process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.FIREBASE_SENDER_ID
};

firebase.initializeApp(config);

export const auth = firebase.auth();
