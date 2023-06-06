// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
const inputEl = document.getElementById('controls')
const boxEl = document.getElementById('boxes');
const btnCreatBox = document.querySelector(' [data-create]');
const btndestroyBox = document.querySelector('[data-destroy]');

btnCreatBox = addEventListener('click', createBoxes);
btndestroyBox = addEventListener('click', destroyBoxes);

 
function createBoxes(){
 const amount = inputEl.value;

  let size = 30;
  for(let i = 0; i < amount; i+=1){
    box.style.width = size + 'px';
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

Щось, я вкрай заплуталася :D
