// Description: This file contains the javascript code for the dropdown menu.
const navMenu = document.querySelector(".nav-menu");
const dropdownNavbar = document.querySelector(".nav");

navMenu.addEventListener("click", () => {
  if (dropdownNavbar.style.display === "none") {
    dropdownNavbar.classList.add("show");
  } else {
    dropdownNavbar.classList.remove("show");
  }
});
