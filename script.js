document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation Toggle
    const menuIcon = document.querySelector(".menu");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking on a link (for mobile)
    document.querySelectorAll(".nav-links li").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Smooth Scroll
    document.querySelectorAll(".nav-links li").forEach(link => {
        link.addEventListener("click", function () {
            const targetSection = this.textContent.toLowerCase();
            const section = document.querySelector(`.${targetSection}`);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Contact Form Validation
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.querySelector("input[placeholder='Your Name']").value.trim();
            let email = document.querySelector("input[placeholder='Email Address']").value.trim();
            let subject = document.querySelector("input[placeholder='Subject']").value.trim();
            let message = document.querySelector("textarea[placeholder='Your Message']").value.trim();

            if (!name || !email || !subject || !message) {
                alert("Please fill out all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Message sent successfully!");
            contactForm.reset();
        });
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Skill Bars Animation on Scroll
    const skillBars = document.querySelectorAll(".bar");
    function animateSkills() {
        const scrollPosition = window.scrollY + window.innerHeight;
        skillBars.forEach(bar => {
            const skillOffset = bar.offsetTop + 50;
            if (scrollPosition >= skillOffset) {
                bar.style.animation = "fillBar 1s forwards";
            }
        });
    }
    window.addEventListener("scroll", animateSkills);
});

/* Skill Bars Animation */
document.head.insertAdjacentHTML("beforeend", `
<style>
    @keyframes fillBar {
        from { width: 0; }
        to { width: 100%; }
    }
</style>
`);
// Cursor Effect
const cursor = document.querySelector(".cursor");

// Move cursor with mouse
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Click effect
document.addEventListener("mousedown", () => {
    cursor.classList.add("click-effect");
});

document.addEventListener("mouseup", () => {
    cursor.classList.remove("click-effect");
});
