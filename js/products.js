document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.parentElement;
            const productName = productItem.querySelector('p:first-of-type').innerText;

            addToCart(productName);
            showNotification(productName);
        });
    });

    function addToCart(productName) {
        // Function to handle adding the product to the cart
        console.log(`${productName} added to cart`); // Placeholder for cart functionality
    }

    function showNotification(productName) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div>${productName} was added to the cart.</div>
            <div><a href="shopping_cart.html" class="view-cart">View Cart</a></div>
        `;
        
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10); // slight delay to ensure the class is added after the element is in the DOM

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500); // delay to match the fade-out duration
        }, 3000); // duration the notification stays visible
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let scrollTimeout;

    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(function() {
            showOrderNowPopup();
        }, 5000); // 5 seconds
    });

    function showOrderNowPopup() {
        if (document.querySelector('.order-now-popup')) return;

        const popup = document.createElement('div');
        popup.className = 'order-now-popup';
        popup.innerHTML = `
            <div class="order-now-message">Feeling hungry? Order now!</div>
            <button class="order-now-button" onclick="window.location.href='order_now.html'">Order Now</button>
            <button class="close-popup-button">&times;</button>
        `;

        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add('show');
        }, 10); // slight delay to ensure the class is added after the element is in the DOM

        const closeButton = popup.querySelector('.close-popup-button');
        closeButton.addEventListener('click', function() {
            popup.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 500); // delay to match the fade-out duration
        });
    }
});

