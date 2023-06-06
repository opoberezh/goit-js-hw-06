

let counterValue = 0;

const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
const valueId = document.getElementById("value");

btnDecrement.addEventListener("click", () => {
    counterValue -=1;
    valueId.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
    counterValue +=1;
    valueId.textContent = counterValue;
});