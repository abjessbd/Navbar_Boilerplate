"use strict";

/* ::::::::::::::::::::
:: GLobal Javascript ::
::::::::::::::::::::::: */

// ==== Sticky Menu ====
window.addEventListener("scroll", function () {
  let header = document.querySelector("header #headerId");
  header.classList.toggle("scrolling", window.scrollY > 0);
});

// =========== Accordion =============
let accordions = document.querySelectorAll(".accordion-item");
accordions.forEach((item) => {
  let label = item.querySelector(".accordion-header");
  label.addEventListener("click", () => {
    accordions.forEach((accordionItem) => {
      accordionItem.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

// =========== Search Bar =============
const toggleButton = document.getElementById("toggleButton");
const searchContainer = document.getElementById("searchContainer");

toggleButton.addEventListener("click", () => {
  searchContainer.classList.toggle("hidden");
});

/* :::::::::::::::::::::::::
::   Template Javascript   ::
:::::::::::::::::::::::::::: */

