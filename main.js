const menuHamburger = document.querySelector(".menu-hamburger");
const nav = document.querySelector("nav");
let width = window.innerWidth;
let btnTop = menuHamburger.getBoundingClientRect().top + window.pageYOffset;

console.log(btnTop);

menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("open");
  nav.classList.toggle("show-nav");
});

["load", "resize"].forEach((event) => {
  window.addEventListener(event, () => {
    window.addEventListener("scroll", () => {
      let y = document["documentElement" || "body"].scrollTop;
      if (window.innerWidth < 768) {
        if (y >= btnTop) {
          menuHamburger.classList.add("fixed");
          nav.classList.add("stickyNav");
        } else {
          menuHamburger.classList.remove("fixed");
          nav.classList.remove("stickyNav");
        }
      }
    });
  });
});



["load", "resize"].forEach((event) => {
window.addEventListener(event, () => {
  if (window.innerWidth !== width)
    if (window.innerWidth < 768) {
      location.reload();
      window.scrollTo(0,0);
    }
  width = window.innerWidth;
});
})
