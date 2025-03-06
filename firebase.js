
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyA_hDuxnFC5rk8Al0jrL8lyQKSDIOrYH8U",
    authDomain: "study-tracker-b9c03.firebaseapp.com",
    projectId: "study-tracker-b9c03",
    storageBucket: "study-tracker-b9c03.appspot.com",
    messagingSenderId: "240996574964",
    appId: "1:240996574964:web:fea170b2aa72720a65e0a1",
    measurementId: "G-1X356EPNWJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
