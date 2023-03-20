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

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (e) {
    e.preventDefault();
  });
