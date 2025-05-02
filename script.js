// Script simple para animación al hacer scroll
document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (sectionTop < screenHeight * 0.8) {
      section.classList.add("visible");
    }
  });
});
