import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey:  process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

firebase.initializeApp(config);

const auth = firebase.auth();

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch((error) => {
  console.error(error)
});

export {
  auth
};