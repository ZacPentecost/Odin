//Testing Dom Manipulation


// First we need to target the node we want ie the container in this case. This targets the first reference of the id container
const container = document.querySelector('#container');


// ------ Part 1
//Now we create a new element aiming for a red text that says "Hey I'm red"
const p = document.createElement('p');
//Set the class of this new element 
p.classList.add('p');
//add text and set the text to be red 
p.textContent = 'Hey I\'m Red!';
p.style.color = 'red';
container.appendChild(p);

// ------ Part 2
const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "I\'m a blue h3!";
h3.style.color = 'blue';
container.appendChild(h3);

// ----- Part 3 
const div = document.createElement('div');
div.classList.add('div');
div.style.backgroundColor = 'pink';
div.style.border = 'solid black'
container.appendChild(div);

// ------ Adding all the inner things of part 3
const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = 'I\'m in a div!';
div.appendChild(h1);

const test = document.createElement('p');
test.classList.add('p');
test.textContent = 'Me too!';
div.appendChild(test);

// ------- Methods for adding events

//Method 2 - still not ideal
// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

//Method 3 - the best way to do things
// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});






