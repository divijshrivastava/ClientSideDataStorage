const input= document.querySelector('#name');
const form = document.querySelector('form');
const submit = document.querySelector('#submitName');
const remove = document.querySelector('#removeName');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
})

submit.addEventListener('click', () => {
    sessionStorage.setItem('name', input.value);
})

remove.addEventListener('click', ()=>{
    sessionStorage.removeItem('name', name.value);
})

const name = sessionStorage.getItem('name');

const h1 = document.querySelector('#title');

name ? h1.textContent = `Hii ${name}`: h1.textContent = `So sad`;