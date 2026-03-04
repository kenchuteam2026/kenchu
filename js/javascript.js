// Navbar cambia al hacer scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Botón Buy
document.getElementById("buyBtn").addEventListener("click", function() {
    alert("Redirigiendo a la compra...");
});


// Mostrar botón al hacer scroll
window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Subir arriba al hacer click
document.getElementById("scrollTopBtn").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
