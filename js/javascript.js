// Navbar cambia al hacer scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Botón Buy
document.getElementById("buyBtn").addEventListener("click", function() {
    alert("Redirigiendo a la compra...");
});