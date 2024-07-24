document.addEventListener('DOMContentLoaded', () => {
    // DOM manipulation example: Adding a thank you message after form submission
    const contactForm = document.querySelector('form');
    const formMessages = document.createElement('div');
    formMessages.id = 'form-messages';
    contactForm.appendChild(formMessages);

    // Event handling example: Add event listener to the form submit button
    contactForm.addEventListener('submit', (event) => {
        // Form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!validateForm(name, email, message)) {
            event.preventDefault(); // Prevent form submission if validation fails
            formMessages.textContent = 'Please fill in all fields correctly.';
            formMessages.style.color = 'red';
        } else {
            formMessages.textContent = 'Thank you for your message!';
            formMessages.style.color = 'green';
        }
    });
});

// Form validation function
function validateForm(name, email, message) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.trim() === '' || !emailPattern.test(email) || message.trim() === '') {
        return false;
    }
    return true;
}