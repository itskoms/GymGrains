document.addEventListener('DOMContentLoaded', () => {
    console.log('cart.js loaded');

    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (!cartItems || !cartTotal) {
        console.error('Cart items or cart total element not found.');
        return;
    }

    // Example products in the cart
    const productsInCart = [
        { name: 'Butter Croissant', quantity: 2, price: 4.00 },
        { name: 'Chocolate Chip Cookie', quantity: 3, price: 3.50 },
    ];

    let total = 0;

    productsInCart.forEach(product => {
        const totalPrice = product.quantity * product.price;
        total += totalPrice;

        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        tdName.textContent = product.name;

        const tdQuantity = document.createElement('td');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = product.quantity;
        quantityInput.min = 1;
        tdQuantity.appendChild(quantityInput);

        const tdPrice = document.createElement('td');
        tdPrice.textContent = `$${product.price.toFixed(2)}`;

        const tdTotal = document.createElement('td');
        tdTotal.textContent = `$${totalPrice.toFixed(2)}`;

        tr.appendChild(tdName);
        tr.appendChild(tdQuantity);
        tr.appendChild(tdPrice);
        tr.appendChild(tdTotal);

        cartItems.appendChild(tr);
    });

    cartTotal.querySelector('p').textContent = `Total: $${total.toFixed(2)}`;
});
