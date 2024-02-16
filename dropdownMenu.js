// Description: This file contains the javascript code for the dropdown menu.
document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector(".nav-menu");
    const dropdownNavbar = document.querySelector(".nav");
  
    navMenu.addEventListener("click", () => {
      dropdownNavbar.classList.toggle("show");
    });
  });
  
