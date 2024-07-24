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

        // Display confirmation message with a button
        messageContainer.innerHTML = `
            <p>Thank you for your order! It will be ready shortly.</p>
            <button id="new-order-button">Start a New Order</button>
        `;
        messageContainer.style.display = 'block';

        // Handle the "Start a New Order" button click
        const newOrderButton = document.getElementById('new-order-button');
        newOrderButton.addEventListener('click', function() {
            // Refresh the page to allow a new order
            location.reload();
        });
    }

    // Attach event listener to the form
    form.addEventListener('submit', handleFormSubmit);
});
