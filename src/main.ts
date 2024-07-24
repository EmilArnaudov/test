import "./style.css";

const burgerMenu = document.getElementById("burgerMenu")!;
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
});
