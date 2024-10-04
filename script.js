document.addEventListener("DOMContentLoaded", function () {
    // Header scrolling effect
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 0) {
            header.classList.add("nav-show");
        } else {
            header.classList.remove("nav-show");
        }
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");

    if (hamburger) {
        hamburger.addEventListener("click", function () {
            navBar.classList.toggle("nav-active");
            this.classList.toggle("toggle");

            // Animate links
            document.querySelectorAll(".nav-bar li").forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 7) + 0.3}s`;
                }
            });
        });
    }
});