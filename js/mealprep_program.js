document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');

    // Create a message container to show after form submission
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
    form.appendChild(messageContainer); // Append it to the form to keep it in context

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // Hide the submit button
        submitButton.style.display = 'none';

        // Display confirmation message
        messageContainer.innerHTML = `
            <p>Sign up successful!</p>
        `;
        messageContainer.style.display = 'block';
    }

    // Add event listener to the form
    form.addEventListener('submit', handleFormSubmit);
});
