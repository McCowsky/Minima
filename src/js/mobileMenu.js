const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
let toggled = false;

function toggleMenu() {
  if (mobileMenu.classList.contains("h-60")) {
    mobileMenu.classList.remove("h-60");
  } else {
    mobileMenu.classList.add("h-60");
  }
}
hamburger.onclick = function () {
  toggleMenu();
};
