
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Menampilkan tahun saat ini di footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Membuka dan menutup menu di HP
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Menutup menu setelah salah satu tautan diklik
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu");
        menuToggle.textContent = "☰";
    });
});
