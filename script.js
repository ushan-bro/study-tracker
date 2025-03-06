function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'admin-dashboard.html';
    } else if (username === 'nangi' && password === 'nangi123') {
        window.location.href = 'student-dashboard.html';
    } else {
        document.getElementById('error').innerText = 'වැරදි Username හෝ Password!';
    }
}

function logout() {
    alert('Logged out!');
}