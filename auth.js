// auth.js

// Check if the user is logged in by checking local storage
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('loggedIn');

    const navLinks = document.getElementById('nav-links');
    const loginLink = document.getElementById('login-link');

    if (isLoggedIn === 'true') {
        // User is logged in, hide the login link
        loginLink.style.display = 'none';

        // Show other protected links
        navLinks.querySelectorAll('li').forEach(link => {
            if (link !== loginLink.parentElement) {
                link.style.display = 'block';
            }
        });
    } else {
        // User is not logged in, hide protected links
        navLinks.querySelectorAll('li').forEach(link => {
            if (link !== loginLink.parentElement) {
                link.style.display = 'none';
            }
        });
    }
}

// Call the function to check login status when the page loads
document.addEventListener('DOMContentLoaded', checkLoginStatus);
// Logout function
function logout() {
    localStorage.removeItem('loggedIn');
    alert("You have been logged out.");
    window.location.href = 'index.html';
}

// Attach the logout function to the button if it exists
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});
