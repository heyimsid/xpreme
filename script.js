const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const toast = document.getElementById("toast");
const cartCount = document.getElementById("cartCount");
const authPanel = document.getElementById("authPanel");

let cart = 0;
let currentProduct = null;

/* PRODUCT CLICK */
document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
        currentProduct = card;
        modal.style.display = "flex";
        modalImg.src = card.querySelector("img").src;
        modalTitle.innerText = card.dataset.name;
        modalPrice.innerText = "₹" + card.dataset.price;
    });
});

document.querySelector(".close").onclick = () => modal.style.display = "none";

/* ADD TO CART */
document.getElementById("addCartModal").onclick = () => {
    cart++;
    cartCount.innerText = cart;
    modal.style.display = "none";
    showToast();
};

function showToast() {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

/* LOGIN */
document.getElementById("loginBtn").onclick = () => authPanel.style.display = "flex";
authPanel.onclick = e => { if (e.target === authPanel) authPanel.style.display = "none"; };
