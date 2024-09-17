const headerNavButton = document.getElementById("headerNavButton");
const headerMegaMenu = document.getElementById("header__mega-menu");
const headerNavButtonIconPlus = document.getElementById(
  "header__nav-button__icon-plus"
);
const headerNavButtonIconMinus = document.getElementById(
  "header__nav-button__icon-minus"
);

headerNavButton.addEventListener("click", function () {
  headerMegaMenu.classList.toggle("show-mega-menu");
  headerNavButtonIconPlus.classList.toggle("hide");
  headerNavButtonIconMinus.classList.toggle("hide");
});
