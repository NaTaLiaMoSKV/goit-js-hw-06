const valueEl = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick() {
    valueEl.textContent = Number(valueEl.textContent) - 1;
}

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onIncrementBtnClick() {
    valueEl.textContent = (Number(valueEl.textContent) + 1);
}