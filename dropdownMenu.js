function myFunction() {
    const dropdownNavbar = document.getElementsByTagName("nav");
    if (dropdownNavbar.style.display === "block") {
      dropdownNavbar.style.display = "none";
    } else {
      dropdownNavbar.style.display = "block";
    }
  }