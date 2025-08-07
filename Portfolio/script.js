// Contact Form Submission
function submitForm(event) {
    event.preventDefault();
    alert('Thank you! Your message has been sent.');
    document.querySelector('.contact-form').reset();
    return false;
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Animated Text in About Section
const textArray = ["Web Developer!", "Coder!", "UI/UX Designer!"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const animatedText = document.querySelector(".animated-text");

function typeEffect() {
    const currentText = textArray[index];
    if (isDeleting) {
        animatedText.textContent = currentText.substring(0, charIndex--);
    } else {
        animatedText.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause after typing
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});
