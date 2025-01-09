document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        
        var message = '';

        if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
                message = 'Sign up successful!';
                
            } else {
                message = 'Passwords do not match.';
            }
        } else {
            message = 'Please fill in all fields.';
        }

        alert(message);
    });
});
