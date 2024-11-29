// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDUwfSx2fCukqxka1TGMVNlp3sJNRuENXo",
    authDomain: "fire-base-new-store.firebaseapp.com",
    projectId: "fire-base-new-store",
    storageBucket: "fire-base-new-store.firebasestorage.app",
    messagingSenderId: "192938383701",
    appId: "1:192938383701:web:6246580f89afd1e85a77dc",
    measurementId: "G-JGZBSJSZ2L"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
