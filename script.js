const inputName = document.getElementById('inputName');
const textContent = document.getElementById('inputText');

const form = document.getElementById('formulario');

const commentPost = document.getElementById('commentPost');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    let p = document.createElement('p');
    p.classList = 'p-2 d-flex text-wrap flex-wrap';
    p.innerHTML = `<strong>${inputName.value}:</strong> &nbsp ${textContent.value}`;

    commentPost.appendChild(p);

    inputName.value = '';
    textContent.value = '';

    inputName.focus();
});