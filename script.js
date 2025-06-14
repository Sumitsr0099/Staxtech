// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open'); // optional for icon animation
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }

        // Close nav menu on mobile after click
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
    });
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const formMessage = document.getElementById('form-message');

    // Basic Validation
    if (name.value && email.value && message.value) {
        formMessage.style.color = 'green';
        formMessage.textContent = '✅ Thank you for your message! I will get back to you soon.';
        this.reset(); // Clear form fields
    } else {
        formMessage.style.color = 'red';
        formMessage.textContent = '⚠️ Please fill out all fields.';
    }
});
