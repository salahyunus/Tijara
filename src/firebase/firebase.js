/*  ----------------------- ﷽  ------------------------ */

// Services used are: AUTHENTICATION SERVICES & DATABASE SERVICES (FIRESTORE)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURING_ID,
};
// Also added this data to env.local which is ignored by git

// Initializing a firebase app instance:
const app = initializeApp(firebaseConfig);
// initialize Authentication service for this app
const auth = getAuth(app);
// initialize firestore db service for this app
const db = getFirestore(app);

// Exporting features/services
export { db, auth };
