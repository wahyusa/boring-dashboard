import "./style.css";

export const $ = (selector, scope = document) => {
  return scope.querySelector(selector);
};

export const $$ = (selector, scope = document) => {
  return Array.from(scope.querySelectorAll(selector));
};

export const animate = (node, animation, onEnd = function () {}) => {
  node.classList.add(animation);
  node.addEventListener(
    "animationend",
    function () {
      node.classList.remove(animation);
      onEnd(node, animation);
    },
    { once: true }
  );
};

$("[data-collapse]").addEventListener("click", () => {
  $("aside").classList.toggle("w-[4rem!important]");
  $("aside").classList.toggle("[align-items:center!important]");
  $("main").classList.toggle("pl-[4rem!important]");
  $$("aside > a").forEach((a) => {
    a.classList.toggle("[justify-content:center!important]");
  });
  $$("[data-collapse-text]").forEach((span) => {
    span.classList.toggle("hidden");
  });
});
