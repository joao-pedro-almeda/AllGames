
const cartItems = [
    { id: 1, name: 'Elden Ring', price: 229.99, quantity: 1 },
    { id: 2, name: 'Sekiro', price: 274.99, quantity: 1 },
    { id: 3, name: 'God of War Ragnarök', price: 249.99, quantity: 1 }
];


function updateCart() {
    const cartList = document.getElementById('cart-items-list');
    cartList.innerHTML = '';

    let total = 0;

    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>R$ ${item.price.toFixed(2)}</td>
            <td>
                <button class="update-quantity" data-id="${item.id}" data-action="decrease">-</button>
                ${item.quantity}
                <button class="update-quantity" data-id="${item.id}" data-action="increase">+</button>
            </td>
            <td>R$ ${itemTotal.toFixed(2)}</td>
            <td><button class="remove-item" data-id="${item.id}">Remover</button></td>
        `;
        cartList.appendChild(row);
    });

    document.getElementById('total-price').textContent = total.toFixed(2);
}


function updateQuantity(id, action) {
    const item = cartItems.find(item => item.id === id);
    if (action === 'increase') {
        item.quantity += 1;
    } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity -= 1;
    }
    updateCart();
}


function removeItem(id) {
    const index = cartItems.findIndex(item => item.id === id);
    if (index > -1) {
        cartItems.splice(index, 1);
    }
    updateCart();
}


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('update-quantity')) {
        const id = parseInt(event.target.dataset.id);
        const action = event.target.dataset.action;
        updateQuantity(id, action);
    }

    if (event.target.classList.contains('remove-item')) {
        const id = parseInt(event.target.dataset.id);
        removeItem(id);
    }

    if (event.target.id === 'checkout-button') {
        alert('Compra finalizada');
    }
});

updateCart();
