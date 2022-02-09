const start = document.querySelector("#start");

const buttons = document.querySelector("buttons");
const increment = document.querySelector("#increment");
const dicrement = document.querySelector("#dicrement");
const reset = document.querySelector("#reset");
const destroy = document.querySelector("#destroy");

function getCurrentValue() {
  const num = start.textContent;
  return Number(num);
}

function plus() {
  const limit = (start.textContent = getCurrentValue() + 1);
  if (limit >= 10) {
    start.style.color = "red";
  } else {
    start.style.color = "";
  }
}

function minus() {
  const limit = (start.textContent = getCurrentValue() - 1);
  if (limit >= 10) {
    start.style.color = "red";
  } else {
    start.style.color = "";
  }
}

function zeroing() {
  start.textContent = 0;
  start.style.color = "";
}

increment.addEventListener("click", plus);
dicrement.addEventListener("click", minus);
reset.addEventListener("click", zeroing);
destroy.addEventListener("click", (e) => {
  e.target.parentElement.parentElement.remove();
});
