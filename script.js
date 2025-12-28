// Mobile Navigation Toggle
const mobileNavBtn = document.querySelector('.mobile-nav-btn');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.body;

mobileNavBtn.addEventListener('click', () => {
    toggleMenu();
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            toggleMenu();
        }
    });
});

function toggleMenu() {
    navbar.classList.toggle('active');
    
    // Icon toggling
    const menuIcon = document.querySelector('ion-icon[name="menu-outline"]');
    const closeIcon = document.querySelector('ion-icon[name="close-outline"]');
    
    if (navbar.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        body.style.overflow = 'auto';
    }
}

// Typing Effect
const typedTextSpan = document.querySelector('.typing-text');
const textArray = ["Web Applications.", "Mobile Apps.", "Clean Code.", "Solutions."];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!typedTextSpan.classList.contains("typing")) typedTextSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    typedTextSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!typedTextSpan.classList.contains("typing")) typedTextSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    typedTextSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Smooth Scroll for Anchor Links (Polyfill-like behavior if needed, but CSS handles mostly)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
