const heading = document.getElementById('heading');

const ClassHeading = document.getElementsByClassName('Heading');

const container = document.getElementById('container');
container.innerHTML = `<h1> this is a change done through inner html</h1>`;
container.classList.add('funky'); //adding style css through javascript

// console.log(ClassHeading[0]);
console.log('heading');

const newElement = document.createElement('h3');
newElement.innerHTML = 'This is new element';
container.innerHTML = newElement
// container.appendChild(newElement);