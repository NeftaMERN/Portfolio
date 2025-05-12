
const menu_toggle = document.getElementById("menu_toggle");
const nav_btn = document.getElementById("nav_btn");

 menu_toggle.onclick = function() {
    nav_btn.classList.toggle("open");
    menu_toggle.classList.toggle("rotate");
 }
