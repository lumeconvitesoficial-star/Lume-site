// Menu mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Revelação suave ao rolar a página
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));

// Abas da tabela de preços
const tabButtons = document.querySelectorAll(".pricing-tabs .tab");

tabButtons.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.tab;

    tabButtons.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    document.querySelectorAll(".panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === targetId);
    });
  });
});
