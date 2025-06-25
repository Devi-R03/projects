const icon = document.querySelector(".icon");
const menu = document.querySelector(".menu-list ul");

icon.addEventListener("click", () => {
  menu.classList.toggle("active");
});

