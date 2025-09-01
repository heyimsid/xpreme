document.addEventListener('DOMContentLoaded', () => {

    const cartIcon = document.querySelector('.cart-icon a');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartCount = 0;

    // Simple add to cart functionality
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            alert(`Item added to cart! Your cart now has ${cartCount} item(s).`);
        });
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        // Apply initial hidden styles
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        observer.observe(section);
    });

});
