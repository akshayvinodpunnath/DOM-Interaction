//const listItemElements = document.querySelectorAll('li');
const h1 = document.getElementById('main-title');
const listItemElements = document.getElementsByTagName('li');

h1.textContent = 'DOM - Manipulated';
h1.style.color = 'purple';
h1.style.backgroundColor = 'yellow';

for ( const listItem of listItemElements) {
    console.log(listItem)
}

const ul = document.body.firstElementChild.nextElementSibling;

const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = "blue";

section.className = 'red-bg'

button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible'
    // } else {
    //     section.className = 'red-bg visible'
    // }
    
    //section.classList.toggle('visible');
    section.classList.toggle('invisible');
})