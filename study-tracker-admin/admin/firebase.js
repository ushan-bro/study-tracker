import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyCbBJoXiuMErQvULA9OibsWRHO_ztc9C7k",
    authDomain: "study-tracker-cada0.firebaseapp.com",
    projectId: "study-tracker-cada0",
    storageBucket: "study-tracker-cada0.appspot.com",
    messagingSenderId: "1093963284926",
    appId: "1:1093963284926:web:4efe4b32a5ec9d9bf779ef",
    measurementId: "G-4N2986Y1V2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;