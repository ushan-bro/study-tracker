function startStudy() {
    alert("Study Time Started! You can take the quiz after 30 minutes.");
    setTimeout(() => {
        document.getElementById('quizSection').style.display = 'block';
    }, 30 * 60 * 1000);
}