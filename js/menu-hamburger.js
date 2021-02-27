const menuHamburger = document.querySelector(".menu-hamburger");
const nav = document.querySelector('nav');
let width = window.innerWidth
let menuTop = menuHamburger.getBoundingClientRect().top + window.pageYOffset;


menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("open")
  nav.classList.toggle("show-nav")
});

function ready() {
  ["load", "resize"].forEach(event => {
    window.addEventListener(event, () => {

      function scroll() {
        var y = document['documentElement' || 'body'].scrollTop;
        
          if (window.innerWidth < 768) {

            if (y >= menuTop) {
                  menuHamburger.classList.add('fixed');
                  nav.classList.add("stickyNav");
                }
                else {
                  menuHamburger.classList.remove('fixed');
                  nav.classList.remove("stickyNav");
                }
          }
      }
      window.addEventListener('scroll', scroll);
    })
  })
}
if (document.readyState == 'complete' || document.readyState == 'loaded') {
  ready();
} else {
  window.addEventListener('DOMContentLoaded', ready);
}

window.addEventListener("resize", () => {
  if (window.innerWidth !== width)
    if (window.innerWidth < 768) {
      
      location.reload();
      window.scrollTo(0, 0);
    }
  width = window.innerWidth
})
