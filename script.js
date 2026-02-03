// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  const isActive = mobileMenu.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isActive);
  const menuIcon = menuToggle.querySelector('svg');
  if (isActive) {
    menuIcon.innerHTML = `
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    `;
  } else {
    menuIcon.innerHTML = `
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    `;
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      const menuIcon = menuToggle.querySelector('svg');
      menuIcon.innerHTML = `
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      `;
    }
  }
});

// cursor animation

  const cursor = document.querySelector('.cursor-shadow');
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  // Follow the cursor slowly
  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animate() {
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;
    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;
    requestAnimationFrame(animate);
  }
  animate();

  // Show only on dark sections
  // const darkSections = document.querySelectorAll('.dark-section');

  // window.addEventListener('mousemove', (e) => {
  //   let showCursor = false;

  //   darkSections.forEach(section => {
  //     const rect = section.getBoundingClientRect();
  //     if (
  //       e.clientX > rect.left &&
  //       e.clientX < rect.right &&
  //       e.clientY > rect.top &&
  //       e.clientY < rect.bottom
  //     ) {
  //       showCursor = true;
  //     }
  //   });

  //   cursor.style.opacity = showCursor ? '1' : '0';
  // });


// Scroll Animations
function handleScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const slideIns = document.querySelectorAll('.slide-in');
  const fadeIns = document.querySelectorAll('.fade-in');
  const scaleIns = document.querySelectorAll('.scale-in');

  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  function handleElements(elements, className) {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add(className);
      }
    });
  }

  handleElements(reveals, 'active');
  handleElements(slideIns, 'show');
  handleElements(fadeIns, 'show');
  handleElements(scaleIns, 'show');
}

// Initial check for animations
handleScrollAnimations();

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu if open
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        const menuIcon = menuToggle.querySelector('svg');
        menuIcon.innerHTML = `
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        `;
      }
    }
  });
});

// Form submission handling

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector('.contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  //   let data = {name: "", email: "", message: ""}
  //  data.name = document.getElementById('name').value
  //  data.email = document.getElementById('email').value
  //  data.message = document.getElementById('message').value
  //  console.log(data);
   
  });
});