import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAigupcoDWXGfPxnSiUepPQKpUB8yyBJs",
  authDomain: "skillswap-3e71f.firebaseapp.com",
  databaseURL: "https://skillswap-3e71f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "skillswap-3e71f",
  storageBucket: "skillswap-3e71f.firebasestorage.app",
  messagingSenderId: "38806196660",
  appId: "1:38806196660:web:f03ce61dcb6739132c22e1",
  measurementId: "G-LKEQH041RJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;