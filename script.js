const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const toast = document.getElementById('cartToast');
const authPanel = document.getElementById('authPanel');

document.querySelectorAll('.view-product').forEach(btn => {
    btn.onclick = e => {
        const card = e.target.closest('.product-card');
        modalTitle.textContent = card.dataset.name;
        modalPrice.textContent = "₹" + card.dataset.price;
        modal.style.display = 'flex';
    };
});

document.querySelectorAll('.close').forEach(b => b.onclick = () => modal.style.display='none');

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.onclick = () => {
        toast.style.display = 'block';
        setTimeout(()=>toast.style.display='none',1500);
    }
});

document.getElementById('loginBtn').onclick = () => {
    authPanel.classList.toggle('active');
};
