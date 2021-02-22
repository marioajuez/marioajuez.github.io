
const menuHamburger = document.querySelector(".menu-hamburger");
const nav  = document.querySelector('nav');

menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("open")
  nav.classList.toggle("show-nav")
});

let btnSticky = document.querySelector(".menu-sticky");
let menuHamburgerTop = btnSticky.offsetTop;


let sticky = () => {
    if (window.scrollY >= menuHamburgerTop)
        menuHamburger.classList.add("stick")
    else
      menuHamburger.classList.remove("stick")
};

window.addEventListener("scroll", sticky )
