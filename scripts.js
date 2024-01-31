// Add interactivity and form validation here

document.addEventListener("DOMContentLoaded", function () {
    // Add your interactive elements or event listeners here
    // For example, smooth scrolling, image sliders, or any other interactive features

    // Example: Smooth scrolling to anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    // Example: Form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});

function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust the offset if you have a fixed header
            behavior: 'smooth'
        });
    }
}

function validateForm(e) {
    // Add your form validation logic here
    // For example, check if required fields are filled, validate email, etc.

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
        alert('Please fill in all required fields with valid information.');
        e.preventDefault(); // Prevent form submission if validation fails
    }
}

function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
