// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
const navLinkItems = document.querySelectorAll(".nav-link");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = mobileMenuBtn.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Close mobile menu when clicking on a link
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offset = 30; // Account for fixed navbar
      const targetPosition = target.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add scrolled class when scrolling down
  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll("section[id]");

function highlightNavLink() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinkItems.forEach((link) => link.classList.remove("active"));
      if (navLink) {
        navLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", highlightNavLink);

// Intersection Observer for Fade In Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
  ".skill-category, .project-card, .experience-item, .stat-item",
);
animateElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Dynamic Year in Footer
const updateYear = () => {
  const yearElements = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });
};

updateYear();

// Parallax Effect for Background Gradients
window.addEventListener("mousemove", (e) => {
  const moveX = (e.clientX * -1) / 50;
  const moveY = (e.clientY * -1) / 50;

  const gradient1 = document.querySelector(".bg-gradient-1");
  const gradient2 = document.querySelector(".bg-gradient-2");
  const gradient3 = document.querySelector(".bg-gradient-3");

  if (gradient1)
    gradient1.style.transform = `translate(${moveX}px, ${moveY}px)`;
  if (gradient2)
    gradient2.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
  if (gradient3)
    gradient3.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
});

// Prevent default behavior for placeholder links
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// Project Card Click Handler (optional - for mobile)
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("click", function (e) {
    // Only on mobile, make cards more interactive
    if (window.innerWidth <= 768 && !e.target.closest(".project-link")) {
      this.classList.toggle("active");
    }
  });
});

// Performance: Debounce scroll events
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll handler
window.addEventListener(
  "scroll",
  debounce(() => {
    highlightNavLink();
  }, 10),
);

// Add loading animation completion
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Console message
console.log(
  "%c🚀 Portfolio Site Loaded!",
  "color: #6366f1; font-size: 20px; font-weight: bold;",
);
console.log(
  "%cBuilt with HTML, CSS & JavaScript",
  "color: #8b5cf6; font-size: 14px;",
);
