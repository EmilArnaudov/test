import "./style.css";

const burgerMenu = document.getElementById("burgerMenu")!;
const drawer = document.getElementById("drawer")!;
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  drawer.classList.toggle("open");
});

document.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!drawer.contains(target) && target !== burgerMenu) {
    drawer.classList.remove("open");
    burgerMenu.classList.remove("active");
  }
});
