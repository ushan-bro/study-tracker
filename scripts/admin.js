
import { db } from './firebase.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const quizForm = document.getElementById('quizForm');
quizForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const question = e.target.question.value;
    const answer = e.target.answer.value;

    await addDoc(collection(db, 'quizzes'), { question, answer });
    alert('Quiz Added!');
    e.target.reset();
});
