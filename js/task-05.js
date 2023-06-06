const textInput = document.getElementById("name-input");

const output = document.getElementById("name-output");



textInput.addEventListener('input', (event) =>{
    const name = textInput.value.trim();
    if(name === ""){
output.textContent = "Anonimous"
    }else{
       output.textContent = event.currentTarget.value;
    }

});

