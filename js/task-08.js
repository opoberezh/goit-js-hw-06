
const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event){
    event.preventDefault();
     const {
    elements: {email, password}
}=event.currentTarget;

    if(email.value === "" || password.value === ""){
        return alert('You should fill in all the fields!');
    }
   const dataObject = {
    Email: email.value, 
    Password: password.value,
   }
console.log(dataObject);
event.currentTarget.reset();
}
