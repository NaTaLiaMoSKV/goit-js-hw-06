const ulEl = document.querySelector('ul#categories');
const numOfCategories = ulEl.children.length;
console.log(`Number of categories: ${numOfCategories}`);

const listEl = document.querySelectorAll('.item > ul');
const titleEl = document.querySelectorAll('.item > h2');
for (let i = 0; i < numOfCategories; i++) {
    console.log(`Category: ${titleEl[i].textContent}`);
    console.log(`Elements: ${listEl[i].children.length}`);
}