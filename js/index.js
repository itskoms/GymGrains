document.addEventListener('DOMContentLoaded', () => {
    // This selects the welcome message using getElementById and modify its content
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = 'Welcome to the New Gym Grains Bakery!';

    // This selects the intro paragraph using querySelector and modify its content
    const introParagraph = document.querySelector('#intro-paragraph');
    introParagraph.textContent = 'Enjoy our freshly baked healthy treats!';

    // This create and append a new paragraph
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Thank you for taking a chance on our small buisness :)';
    document.querySelector('main').appendChild(newParagraph);

    // This modifies the footer links using querySelectorAll
    const footerLinks = document.querySelectorAll('.footer a');
    footerLinks.forEach(link => {
        link.textContent += '<3';
    });

    // This removes an element if it exists
    const announcement = document.querySelector('.announcement');
    if (announcement) {
        announcement.remove();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Navigation Links: Highlight active link
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            navLinks.forEach(link => link.classList.remove('active'));

            event.target.classList.add('active');
        });
    });
});


// Featured Products: Handle "Shop Now" button clicks
const shopNowButtons = document.querySelectorAll('.featured-products .product .button');

shopNowButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Navigate to products.html
        window.location.href = 'products.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('promotion-bar').addEventListener('click', (event) => {
        window.location.href = 'order_now.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Function to update countdown timer
    function updateCountdown() {
        const endTime = new Date();
        endTime.setHours(endTime.getHours() + 96); // 96 hours from now (4 days)

        const countdownElement = document.getElementById('countdown');

        setInterval(() => {
            const now = new Date();
            const timeLeft = endTime - now;

            if (timeLeft < 0) {
                countdownElement.textContent = 'Offer expired!';
                return;
            }

            const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.textContent = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
        }, 1000);
    }

    // Initial call to set up the timer
    updateCountdown();

    // Redirect to Order Now page on click
    document.getElementById('promotion-bar').addEventListener('click', (event) => {
        window.location.href = 'order_now.html';
    });
});