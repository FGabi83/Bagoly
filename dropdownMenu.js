function myFunction() {
    const dropdownNavbar = document.getElementsByTagName("nav");
    if (dropdownNavbar.style.display === "flex") {
      dropdownNavbar.style.display = "none";
    } else {
      dropdownNavbar.style.display = "flex";
    }
  }