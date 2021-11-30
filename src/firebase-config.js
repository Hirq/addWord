import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAi-QabP992dT-_eyxM4Q-VHpD5d1slXoM",
  authDomain: "wordadd2a.firebaseapp.com",
  projectId: "wordadd2a",
  storageBucket: "wordadd2a.appspot.com",
  messagingSenderId: "624593549154",
  appId: "1:624593549154:web:f04d46a1e3ebaf18c11e3b",
  measurementId: "G-38H33QF1XH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
