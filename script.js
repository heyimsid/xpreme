
document.addEventListener('DOMContentLoaded', () => {
  const cartCountEl = document.getElementById('cart-count');
  let cartCount = 0;

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartCountEl.textContent = cartCount;
      alert('Added to cart!');
    });
  });
});
