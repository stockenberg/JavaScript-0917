var cart = [];

function addToCart(price, name, amount) {

    if (localStorage.cart) {
        cart = JSON.parse(localStorage.cart);
    }

    cart.push({price: price, name: name, amount: amount});
    localStorage.cart = JSON.stringify(cart);

}

function clearCart() {
    localStorage.removeItem('cart');
}


function debug() {
    console.log('cart -------------------------------');
    console.log(cart);
    console.log('------------------------------------');

    console.log('localStorage------------------------');
    console.log(localStorage);
    console.log('------------------------------------');
}
