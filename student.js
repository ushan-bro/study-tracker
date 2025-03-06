
import { db } from './firebase.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const quizContainer = document.getElementById('quizContainer');

async function loadQuiz() {
    const querySnapshot = await getDocs(collection(db, 'quizzes'));
    quizContainer.innerHTML = '';
    querySnapshot.forEach(doc => {
        const quiz = doc.data();
        quizContainer.innerHTML += `<div><p>${quiz.question}</p><input type='text' placeholder='Your Answer'></div>`;
    });
}
window.onload = loadQuiz;
