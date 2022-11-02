const checkbox = document.getElementById("checkbox");
const menu = document.getElementById("menu");
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    checkbox.checked = false;
  });
});

window.addEventListener("click", (event) => {
  const isOutsideMenuClick = !menu.contains(event.target);
  const isCheckboxClick = checkbox.contains(event.target);

  if (isOutsideMenuClick && !isCheckboxClick && checkbox.checked) {
    checkbox.checked = false;
  }
});
