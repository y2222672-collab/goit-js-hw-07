const findInput = document.querySelector("#name-input");
const findSpan = document.querySelector("#name-output");
findInput.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  findSpan.textContent = trimmedValue.length > 0 ? trimmedValue : "Anonymous";
});
