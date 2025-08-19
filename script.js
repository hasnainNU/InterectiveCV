const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      document.querySelectorAll(".section").forEach(sec => {
      sec.classList.remove("highlight");
      });
    targetSection.classList.add("highlight");
    }
  });
});
const zoomElements = document.querySelectorAll(".section, .profile-pic");
zoomElements.forEach(element => {
  element.classList.add("zoom-section");
  element.addEventListener("mouseenter", () => {
  element.classList.add("zoomed");
  });
  element.addEventListener("mouseleave", () => {
  element.classList.remove("zoomed");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
