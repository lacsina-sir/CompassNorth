document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var message = '';

        
        var validUsername = 'user';
        var validPassword = 'pass123';

        if (username === validUsername && password === validPassword) {
            message = 'Login successful!';
           
        } else {
            message = 'Invalid username or password.';
        }

        alert(message);
    });
});
