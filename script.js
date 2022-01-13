"use strict";

let menuIcon = document.getElementById("menuIcon");
let sidebar = document.getElementById("sidebar");

let menuOpened = false;

menuIcon.addEventListener("click", () => {
   if (!menuOpened) {
      menuIcon.src = "menu_open_white_24dp.svg";
      sidebar.style.display = "block";
      menuOpened = true;
   } else {
      menuIcon.src = "menu_black_24dp.svg";
      sidebar.style.display = "none";
      menuOpened = false;
   }
});
