// JavaScript for adding products to cart
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productId = button.dataset.id;
            alert(`Product ${productId} added to cart!`); // You can replace this with actual cart functionality
        });
    });
});
