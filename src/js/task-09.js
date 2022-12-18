function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector('.change-color');
const output = document.querySelector('.color');

button.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  output.textContent = color;

}