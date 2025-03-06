function submitQuiz() {
    const answers = {
        q1: "4",
        q2: "Blue"
    };

    let score = 0;
    let form = document.getElementById("quizForm");

    if (form.q1.value === answers.q1) score++;
    if (form.q2.value === answers.q2) score++;

    document.getElementById("result").innerHTML = "You scored " + score + " out of 2.";
}