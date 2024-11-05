// login.js

function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email) && !phonePattern.test(email)) {
        alert("Please enter a valid email address or phone number.");
        return false;
    }

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Login successful!") {
            alert("Login successful!");
            
            // Set login status in local storage
            localStorage.setItem('loggedIn', 'true');

            // Redirect to destination.html after successful login
            window.location.href = 'destination.html';
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred. Please try again.");
    });

    return false;
}
