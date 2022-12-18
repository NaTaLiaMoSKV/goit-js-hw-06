const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur(event) {
    const input = event.currentTarget;
    if(input.value.length == input.dataset.length) {
        input.classList.add('.valid');
        input.classList.remove('.invalid');
        console.log(input);
    } else {
        input.classList.add('.invalid');
        input.classList.remove('.valid');
        console.log(input);
    }
}