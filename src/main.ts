import "./style.css";

const burgerMenu = document.getElementById("burgerMenu")!;
const drawer = document.getElementById("drawer")!;
const booster = document.getElementById("booster")!;
const protein = document.getElementById("protein")!;

burgerMenu.addEventListener("click", toggleDrawer);

document.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;

  if (!drawer.contains(target) && target !== burgerMenu) {
    closeDrawer();
  }
});

drawer.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  console.log(target.dataset.id);
  if (!target.dataset.id) return;

  closeDrawer();
  switch (target.dataset.id) {
    case "booster":
      booster.scrollIntoView({ behavior: "smooth" });
      break;
    case "protein":
      protein.scrollIntoView({ behavior: "smooth" });
      break;
    default:
      break;
  }
});

// function openDrawer(): void {
//   drawer.classList.add("open");
//   burgerMenu.classList.add("active");
// }

function closeDrawer(): void {
  drawer.classList.remove("open");
  burgerMenu.classList.remove("active");
}

function toggleDrawer(): void {
  drawer.classList.toggle("open");
  burgerMenu.classList.toggle("active");
}
