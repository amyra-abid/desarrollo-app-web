// Cuando se hace clic en la flecha, baja a la sección "about"
document.getElementById("scroll-down").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
