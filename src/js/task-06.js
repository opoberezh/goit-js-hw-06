
const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", () => {
const enteredValue = inputEl.value.trim();
const requiredLength = parseInt(inputEl.dataset.length);
if (enteredValue.length === requiredLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove ('invalid');
} else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
    inputEl.value = "Please enter 6 symbols";
}
});

inputEl.addEventListener("focus", () => {
    inputEl.value = "";
});