// ================================
// MOBILE MENU
// ================================

const menuToggle =
  document.getElementById("menu-toggle");

const navLinks =
  document.getElementById("nav-links");


if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {

      menuToggle.textContent = "✕";

    } else {

      menuToggle.textContent = "☰";

    }

  });


  document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";

      });

    });

}


// ================================
// TYPING EFFECT
// ================================

const typingText =
  document.getElementById("typing-text");


const roles = [
  "Python Developer",
  "Web Developer",
  "Backend Developer",
  "AI/ML Enthusiast"
];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

  if (!typingText) return;

  const currentRole =
    roles[roleIndex];


  if (!deleting) {

    typingText.textContent =
      currentRole.substring(
        0,
        characterIndex + 1
      );

    characterIndex++;


    if (
      characterIndex ===
      currentRole.length
    ) {

      deleting = true;

      setTimeout(
        typeEffect,
        1500
      );

      return;

    }

  } else {

    typingText.textContent =
      currentRole.substring(
        0,
        characterIndex - 1
      );

    characterIndex--;


    if (characterIndex === 0) {

      deleting = false;

      roleIndex =
        (roleIndex + 1) %
        roles.length;

    }

  }


  setTimeout(
    typeEffect,
    deleting ? 60 : 100
  );

}


typeEffect();


// ================================
// ACTIVE NAVBAR
// ================================

const sections =
  document.querySelectorAll(
    "main section"
  );


const navigationLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


function updateActiveNavigation() {

  let currentSection = "";


  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 150;


    if (
      window.scrollY >= sectionTop
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navigationLinks.forEach((link) => {

    link.classList.remove("active");


    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveNavigation
);


updateActiveNavigation();


// ================================
// BACK TO TOP
// ================================

const backToTop =
  document.getElementById(
    "back-to-top"
  );


if (backToTop) {

  window.addEventListener(
    "scroll",
    () => {

      if (
        window.scrollY > 500
      ) {

        backToTop.classList.add(
          "show"
        );

      } else {

        backToTop.classList.remove(
          "show"
        );

      }

    }
  );


  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}