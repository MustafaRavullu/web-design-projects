const headerNavButton = document.getElementById("headerNavButton");
const headerMegaMenu = document.getElementById("header__mega-menu");

headerNavButton.addEventListener("click", function () {
  headerMegaMenu.classList.toggle("show-mega-menu");
});
