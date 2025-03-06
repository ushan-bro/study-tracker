function savePlan() {
    const plan = document.getElementById('todayPlan').value;
    const quizQuestion = document.getElementById('quizQuestion').value;
    const quizAnswer = document.getElementById('quizAnswer').value.toLowerCase();

    localStorage.setItem('todayPlan', plan);
    localStorage.setItem('quizQuestion', quizQuestion);
    localStorage.setItem('quizAnswer', quizAnswer);

    alert('Plan & Quiz Saved!');
    loadScores();
}

function loadScores() {
    const scores = JSON.parse(localStorage.getItem('nangiScores') || '[]');
    const scoreList = document.getElementById('scoreList');
    scoreList.innerHTML = scores.map(score => `<li>${score}</li>`).join('');
}

function clearScores() {
    if (confirm('Are you sure you want to clear all scores?')) {
        localStorage.removeItem('nangiScores');
        loadScores();
        alert('Scores cleared!');
    }
}

function logout() {
    window.location.href = 'index.html';
}

window.onload = loadScores;