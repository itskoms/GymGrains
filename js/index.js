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
