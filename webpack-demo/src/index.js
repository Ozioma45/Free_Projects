import _ from 'lodash';

import printMe from './print.js';

//import my function
import myName from './myName';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    //use my function
    element.textContent = myName('Cody');
    element.classList.add('hello')

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());