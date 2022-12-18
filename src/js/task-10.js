function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');
const input = document.querySelector('#controls input');

createBtn.addEventListener('click', onCreateBtnClick);

function onCreateBtnClick() {
 const amount = input.value;
 createBoxes(amount);
}

function createBoxes(amount) {
  const divs = [];
  for(let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${ (i * 10) + 30}px`;
    div.style.height = `${ (i * 10) + 30}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
  }
  divEl.append(...divs);
  console.log(divEl);
}

destroyBtn.addEventListener('click', onDestroyBtnClick);

function onDestroyBtnClick() {
  const divsToDelete = document.querySelectorAll('.box');
  divEl.innerHTML = '';
}