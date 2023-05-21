const categoriesEl = document.querySelector('#categories')
const categoriesItemEl = categoriesEl.querySelectorAll('.item')
const lengthOfCategories = categoriesItemEl.length;
console.log(`Number of Categories: ${lengthOfCategories}`)

categoriesItemEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});