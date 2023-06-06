
const inputEl = document.querySelector('#controls input');
const boxEl = document.getElementById('boxes');
const btnCreatBox = document.querySelector(' [data-create]');
const btnDestroyBox = document.querySelector('[data-destroy]');

btnCreatBox.addEventListener('click', createBoxes);
btnDestroyBox.addEventListener('click', destroyBoxes);

 
function createBoxes(){
 const amount = inputEl.value;

  let size = 30;
  for(let i = 0; i < amount; i+=1){
    const box = document.createElement('div');box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor()
    boxEl.appendChild(box);
    size +=10;
  }
}
function destroyBoxes(){
  boxEl.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




