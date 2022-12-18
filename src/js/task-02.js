const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const items = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredients[i];
  items.push(li);
}
ingredientsEl.append(...items);
console.log(ingredientsEl);