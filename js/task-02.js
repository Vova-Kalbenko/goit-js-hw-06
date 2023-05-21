const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsUlEl =  document.querySelector('#ingredients')
const ArrayEl = []
ingredients.forEach(elem => {
  const newItem = document.createElement('li')
  newItem.className = 'item'
	newItem.textContent = elem
	ArrayEl.push(newItem)
});
ingredientsUlEl.append(...ArrayEl)
