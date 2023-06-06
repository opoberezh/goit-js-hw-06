
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.getElementById('ingredients');


ingredients.forEach(ingredient =>{
  const liEl = document.createElement('li');
   liEl.textContent = ingredient;
   liEl.classList.add('item');
   ingredientsEl.appendChild(liEl);
 
});
// console.log(ingredientsEl);