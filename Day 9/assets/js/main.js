const showmenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showmenu("nav-toggle", "nav-menu");

const sizes = document.querySelectorAll(".size__tallas");
const colors = document.querySelectorAll(".sneaker__color");
const sneaker = document.querySelectorAll(".sneaker__img");

function changeSize() {
  sizes.forEach((size) => size.classList.remove("active"));
  this.classList.add("active");
}

function changeColor() {
  let primary = this.getAttribute("primary");
  let color = this.getAttribute("color");
  let sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`);

  colors.forEach((color) => color.classList.remove("active"));
  this.classList.add("active");

  document.documentElement.style.setProperty("--primary", primary);

  sneaker.forEach((s) => s.classList.remove("shows"));
  sneakerColor.classList.add("shows");
}

sizes.forEach((size) => size.addEventListener("click", changeSize));
colors.forEach((color) => color.addEventListener("click", changeColor));
