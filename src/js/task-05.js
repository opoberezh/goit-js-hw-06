const textInput = document.getElementById("name-input");

const output = document.getElementById("name-output");

const value = "Anonymous";

textInput.addEventListener('input', (event) =>{
output.textContent = event.currentTarget.value;
});

