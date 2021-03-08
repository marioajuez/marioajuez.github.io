const menuHamburger = document.querySelector(".menu-hamburger");
// const nav = document.getElementById("menu-responsive").querySelector(":scope > nav");
const nav = document.querySelector("#menu-responsive")


menuHamburger.addEventListener("click", () => {
    menuHamburger.classList.toggle("open")
    nav.classList.toggle("show-nav")
});

