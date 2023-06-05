

const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const bodyEl = document.body;

btnChangeColor.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
spanColor.textContent = randomColor;

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

