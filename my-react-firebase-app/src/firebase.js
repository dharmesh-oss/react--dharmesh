// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCRrSbh-eOohabBwLe_7TGA8DAXnC3L7pk",
    authDomain: "fire-base-storage-f72c1.firebaseapp.com",
    projectId: "fire-base-storage-f72c1",
    storageBucket: "fire-base-storage-f72c1.firebasestorage.app",
    messagingSenderId: "800398554232",
    appId: "1:800398554232:web:ea9bc52bce56818138a98d",
    measurementId: "G-S3LK7KZXYW"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
