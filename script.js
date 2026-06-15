// Shop Now Button Click Handler
const ctaButton = document.querySelector(".cta-button");
ctaButton.addEventListener("click", () => {
    alert("Welcome to Cook's Limitless Layers! Shop coming soon.");
});

// Explore Buttons
const exploreButtons = document.querySelectorAll(".explore-btn");
exploreButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const categories = ["3D Prints", "Apparel", "Household Accessories", "Everyday Essentials"];
        alert(`Viewing ${categories[index]} collection...`);
    });
});

// Form Submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your inquiry! We'll get back to you soon.");
        contactForm.reset();
    });
}

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll(".product-card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
});

console.log("Cook's Limitless Layers website loaded successfully!");