import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNnPb-1ll2YX5E2IJBvA1P6a0DfZAw2cw",
  authDomain: "channelapp-f3fdb.firebaseapp.com",
  projectId: "channelapp-f3fdb",
  storageBucket: "channelapp-f3fdb.appspot.com",
  messagingSenderId: "893426445409",
  appId: "1:893426445409:web:fff58532383a882dd3ce20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
