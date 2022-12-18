const form = document.querySelector(".login-form");

// console.dir(form);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    //console.dir(event.currentTarget);
    const elements = event.currentTarget.elements;
    if (elements[0].value === '' || elements[1].value === '') {
        alert('Пожалуйста, заполните все поля формы.');
        return;
    }
    const data = {};

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        data[name] = value;
    })
    console.log(data);
}