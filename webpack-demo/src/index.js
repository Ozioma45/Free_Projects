import _ from 'lodash';

//import my function
import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    //use my function
    element.textContent = myName('Cody');
    element.classList.add('hello')

    return element;
  }
  
  document.body.appendChild(component());