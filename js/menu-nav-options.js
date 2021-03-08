document.body.onload = useIt;
console.log("hola")
// document.addEventListener("DOMContentLoaded",useIt)

function useIt() {
  console.log("hola")
  let content = document.querySelector("template").content;
  var menu = document.querySelectorAll(".menu");

  for (let item of menu) {
    document
      .getElementById(item.id)
      .appendChild(document.importNode(content, true));
  }
}

