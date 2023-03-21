document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("body");
  element.style.minHeight = `${window.innerHeight}px`;

  function updateHeight() {
    element.style.minHeight = `${window.innerHeight}px`;
  }

  // Set initial height
  updateHeight();

  // Add event listener for window resize
  window.addEventListener("resize", updateHeight);
});

// if there is a form on the page, prevent it from submitting
const loginForm = document.getElementsByTagName("form")[0];

loginForm
  ? document
      .getElementsByTagName("form")[0]
      .addEventListener("submit", function (e) {
        e.preventDefault();
      })
  : "";

let triggerCollapse = document.getElementById("triggerCollapse");

triggerCollapse.addEventListener("click", function () {
  const aside = document.getElementsByTagName("aside")[0];
  const bottomAside = document.getElementById("bottomAside");
  const main = document.getElementsByTagName("main")[0];

  aside.classList.toggle("w-[4rem]");
  bottomAside.classList.toggle("w-[4rem]");
  main.classList.toggle("pl-[4rem]");
});
