import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAhRFAvTHy_NNqhRdQMrLxiu2hBGMzoclA",
  authDomain: "market-place-qe328.firebaseapp.com",
  projectId: "market-place-qe328",
  storageBucket: "market-place-qe328.appspot.com",
  messagingSenderId: "817159786585",
  appId: "1:817159786585:web:7f3f33b03a3614f10b6148"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);