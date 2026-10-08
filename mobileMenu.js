const menuBtn = document.querySelector("#menu-btn");
const navList = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
});