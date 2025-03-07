import { db } from './firebase.js';
import { collection, addDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';

async function addQuiz() {
    const question = document.getElementById('quizQuestion').value;
    const answer = document.getElementById('quizAnswer').value;

    await addDoc(collection(db, 'quizzes'), { question, answer });
    alert('Quiz Added!');
}

async function clearAllScores() {
    const querySnapshot = await getDocs(collection(db, 'scores'));
    querySnapshot.forEach(async (docItem) => {
        await deleteDoc(doc(db, 'scores', docItem.id));
    });
    alert('All Scores Cleared!');
}

window.addQuiz = addQuiz;
window.clearAllScores = clearAllScores;
