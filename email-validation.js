function isValidEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    return emailRegex.test(email);
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    if (!isValidEmail(emailInput.value)) {
        emailError.innerHTML = 'Invalid email address';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
}
  