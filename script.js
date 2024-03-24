const button_mobile = document.querySelector(".button-mobile");
const navbar_mobile = document.querySelector(".header-navbar-responsive");
const close_menu_navbar_mobile = document.querySelector(".close-navbar");

const search_mobile_button = document.querySelector(".search-mobile-button");
const search = document.querySelector(".header-search");

button_mobile.addEventListener("click", function () {
  navbar_mobile.classList.toggle("hidden");
});
close_menu_navbar_mobile.addEventListener("click", function () {
  navbar_mobile.classList.toggle("hidden");
});

search_mobile_button.addEventListener("click", function () {
  search.classList.toggle("hidden");
});
