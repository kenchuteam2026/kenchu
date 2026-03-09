// Navbar cambia al hacer scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Botón Buy (solo si existe)
const buyBtn = document.getElementById("buyBtn");
if (buyBtn) {
    buyBtn.addEventListener("click", function () {
        alert("Redirigiendo a la compra...");
    });
}

// Botón scrollTop
const scrollBtn = document.getElementById("scrollTopBtn");

// Mostrar botón al hacer scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// Subir arriba al hacer click
scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
