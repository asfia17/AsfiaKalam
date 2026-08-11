// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections = document.querySelectorAll("main section");

const navigationLinks =
  document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 180;

    const sectionBottom =
      sectionTop + section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionBottom
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


window.addEventListener(
  "load",
  updateActiveNavigation
);


// ========================================
// PROJECT CARD INTERACTION
// ========================================

document.querySelectorAll(".project-card").forEach((card) => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

});