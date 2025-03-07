import { db, auth } from './firebase.js';
import { collection, getDocs } from 'firebase/firestore';

async function loadQuizzes() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';
    const querySnapshot = await getDocs(collection(db, 'quizzes'));

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        quizContainer.innerHTML += `<div><strong>${data.question}</strong>: ${data.answer}</div>`;
    });
}

document.addEventListener('DOMContentLoaded', loadQuizzes);
