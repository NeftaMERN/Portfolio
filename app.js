
const menuBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  sidebar.classList.toggle("open");
  menuBtn.textContent = menuBtn.classList.contains("open") ? "×" : "+";
});
