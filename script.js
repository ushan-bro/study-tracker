function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'admin.html';
    } else if (username === 'nangi' && password === 'nangi123') {
        window.location.href = 'student.html';
    } else {
        document.getElementById('error').innerText = 'වැරදි Username හෝ Password!';
    }
}

function logout() {
    alert('Logged out!');
    window.location.href = 'index.html';
}