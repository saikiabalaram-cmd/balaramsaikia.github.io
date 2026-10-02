// =====================================
// BALARAM SAIKIA | ৰাম
// Website JavaScript
// =====================================


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});


// Remember user's theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}


// ===============================
// GALLERY LIGHTBOX
// ===============================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.className = "image-overlay";

        overlay.innerHTML = `
            <div class="lightbox">
                <button class="close-lightbox">×</button>
                <img src="${image.src}" alt="${image.alt}">
            </div>
        `;

        document.body.appendChild(overlay);

        // Close button
        overlay
            .querySelector(".close-lightbox")
            .addEventListener("click", () => {
                overlay.remove();
            });

        // Click outside image
        overlay.addEventListener("click", (event) => {

            if (event.target === overlay) {
                overlay.remove();
            }

        });

    });

});


// ===============================
// SMOOTH NAVIGATION
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// CURRENT YEAR
// ===============================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.textContent =
        `© ${year} BALARAM SAIKIA | ৰাম`;

}