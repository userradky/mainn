const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Predefined email and password
const predefinedEmail = "example@example.com";
const predefinedPassword = "password";

// Login form elements
const emailInput = document.querySelector('.form-box.login input[type="email"]');
const passwordInput = document.querySelector('.form-box.login input[type="password"]');
const loginForm = document.querySelector('.form-box.login form');

// Function to handle login
const handleLogin = (event) => {
    event.preventDefault();
    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value.trim();
    if (enteredEmail === predefinedEmail && enteredPassword === predefinedPassword) {
        // Redirect to index1.html after successful login
        window.location.href = "index1.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
};

// Event listeners
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

loginForm.addEventListener('submit', handleLogin);
const logo = document.querySelector('.logo');
const languages = ['शैली', 'തരം', 'కళా ప్రక్రియ', 'வகை', 'ಪ್ರಕಾರ', 'ধারা','શૈલી', 'ਸ਼ੈਲੀ', 'ଧାରା', 'سٹائل','Genre'];

let index = 0;

function changeLanguage() {
  logo.textContent = languages[index];
  index = (index + 1) % languages.length;
}

setInterval(changeLanguage, 1100);
