let cartItems = [];

function addToCart(itemName) {
    cartItems.push(itemName);
    alert(`${itemName} added to cart!`);
}

function viewCart() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Items in your cart: ${cartItems.join(", ")}`);
    }
}
