function loadPlanAndQuiz() {
    document.getElementById('planText').innerText = localStorage.getItem('todayPlan') || 'No Plan Added';
    document.getElementById('quizQuestion').innerText = localStorage.getItem('quizQuestion') || 'No Quiz Added';
}

function submitQuiz() {
    const userAnswer = document.getElementById('quizAnswer').value.toLowerCase();
    const correctAnswer = localStorage.getItem('quizAnswer') || '';

    if (userAnswer === correctAnswer) {
        document.getElementById('quizResult').innerText = 'Correct! 🎉';
        saveScore('✅ Correct');
    } else {
        document.getElementById('quizResult').innerText = 'Wrong Answer 😢';
        saveScore('❌ Wrong');
    }
}

function saveScore(result) {
    const scores = JSON.parse(localStorage.getItem('nangiScores') || '[]');
    scores.push(result);
    localStorage.setItem('nangiScores', JSON.stringify(scores));
}

function logout() {
    window.location.href = 'index.html';
}

window.onload = loadPlanAndQuiz;