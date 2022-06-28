import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCtubcJEi0WxXDu1llq1faeI1MxsN8Q2Q",
  authDomain: "voca-4d906.firebaseapp.com",
  projectId: "voca-4d906",
  storageBucket: "voca-4d906.appspot.com",
  messagingSenderId: "594037194526",
  appId: "1:594037194526:web:94bdb03df405142ebe930f",
  measurementId: "G-E98WXMJR1V",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
