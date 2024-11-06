// auth.js

// Check if the user is logged in by checking local storage
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    const navLinks = document.getElementById('nav-links');
    const loginLink = document.getElementById('login-link');

    // Show or hide links based on login status
    if (isLoggedIn) {
        // User is logged in, hide the login link and show protected links
        loginLink.style.display = 'none';

        // Show all other links
        navLinks.querySelectorAll('li').forEach(link => {
            if (link !== loginLink.parentElement) {
                link.style.display = 'block';
            }
        });

        // Add logout link dynamically
        const logoutLink = document.createElement('li');
        logoutLink.innerHTML = '<a href="#" id="logout-link">Logout</a>';
        navLinks.appendChild(logoutLink);

        // Attach the logout function to the logout link
        logoutLink.addEventListener('click', (event) => {
            event.preventDefault();
            logout();
        });
    } else {
        // User is not logged in, show only the login link
        loginLink.style.display = 'inline';

        // Hide all other links
        navLinks.querySelectorAll('li').forEach(link => {
            if (link !== loginLink.parentElement) {
                link.style.display = 'none';
            }
        });
    }
}

// Logout function
function logout() {
    localStorage.removeItem('loggedIn');
    alert("You have been logged out.");
    window.location.href = 'index.html';
}

// Call the function to check login status when the page loads
document.addEventListener('DOMContentLoaded', checkLoginStatus);
