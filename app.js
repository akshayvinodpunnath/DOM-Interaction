//const listItemElements = document.querySelectorAll('li');
const h1 = document.getElementById('main-title');
const listItemElements = document.getElementsByTagName('li');

h1.textContent = 'DOM - Manipulated';
h1.style.color = 'purple';
h1.style.backgroundColor = 'yellow';

for ( const listItem of listItemElements) {
    console.log(listItem)
}