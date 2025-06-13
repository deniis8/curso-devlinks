import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiGcCjNxnRB0llBIPZJF6WQ_KRqBO3Rns",
  authDomain: "reactlinks-21bb6.firebaseapp.com",
  projectId: "reactlinks-21bb6",
  storageBucket: "reactlinks-21bb6.firebasestorage.app",
  messagingSenderId: "175158071548",
  appId: "1:175158071548:web:b9853cbb139bb8579d8779"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};