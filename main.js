const homeButton = document.getElementById("home");
const menu = document.querySelector(".wrap-menu");

homeButton.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.toggle("show-menu");
});

document.addEventListener("click", function (event) {
  if (menu.classList.contains("show-menu") && event.target !== homeButton) {
    menu.classList.remove("show-menu");
  }
});
