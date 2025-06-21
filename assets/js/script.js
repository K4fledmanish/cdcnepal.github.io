// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const sliderContainer = document.querySelector(".slider-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlides() {
  if (!slides || slides.length === 0 || !sliderContainer) return; // Guard clause

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  
  const offset = slideIndex * -100 / slides.length;
  sliderContainer.style.transform = `translateX(${offset}%)`;
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        slideIndex--;
        showSlides();
    });

    nextBtn.addEventListener('click', () => {
        slideIndex++;
        showSlides();
    });

    // Auto-play slider
    setInterval(() => {
        slideIndex++;
        showSlides();
    }, 5000); // Change slide every 5 seconds
}

showSlides();

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
const navLinks = nav.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// "Back to Top" Button
const toTopBtn = document.getElementById('to-top-btn');

window.addEventListener('scroll', () => {
    if (toTopBtn) {
        if (window.scrollY > 300) {
            toTopBtn.classList.add('active');
        } else {
            toTopBtn.classList.remove('active');
        }
    }
});

if (toTopBtn) {
    toTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}