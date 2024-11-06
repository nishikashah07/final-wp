// signup.js

function validateSignupForm() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return false; // Prevent form submission
    }

    // Collect form data
    const formData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        password: password,
    };

    // Send data to the server
    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Account created successfully!") {
            alert("Account created successfully!");

            // Redirect user to login page
            window.location.href = 'login.html';
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred. Please try again.");
    });

    return false; // Prevent default form submission
}
