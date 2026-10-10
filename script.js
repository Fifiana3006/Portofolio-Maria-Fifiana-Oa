
/* 1. Mengambil elemen menu dari HTML */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

/* 2. Membuka dan menutup menu saat tombol diklik */
menuToggle.addEventListener("click", function () {
    const menuTerbuka = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", menuTerbuka);

    if (menuTerbuka) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

/* 3. Menutup menu setelah tautan dipilih */
const semuaTautan = document.querySelectorAll("#navLinks a");

semuaTautan.forEach(function (tautan) {
    tautan.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

/* 4. Menampilkan tahun otomatis pada footer */
const tahun = document.getElementById("year");

tahun.textContent = new Date().getFullYear();

/* 5. Memberikan efek pada kartu proyek */
const kartuProyek = document.querySelectorAll(".project-card");

kartuProyek.forEach(function (kartu) {
    kartu.addEventListener("click", function () {
        kartu.style.borderColor = "#7c19e8";
    });
});
