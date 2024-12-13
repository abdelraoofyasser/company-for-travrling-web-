document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation (for demonstration purposes only)
    if (username === "abdelraof yasser" && password === "as01001667188") {
        document.getElementById('loginMessage').innerText = "Login successful!";
    } else {
        document.getElementById('loginMessage').innerText = "Invalid username or password.";
    }
});