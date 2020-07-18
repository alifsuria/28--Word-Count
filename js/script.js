const input = document.querySelector("#input");
const submitBtn = document.querySelector("#form");
const displayContainer = document.querySelector(".display-container");
submitBtn.addEventListener("submit", (event) => {
  event.preventDefault();

  let word = input.value.length;

  displayContainer.innerHTML = `<span class="" id="display">${word}</span>`;
});
