import _ from 'lodash';
//import my function
import myName from './myName';

//import css file
import './style.css';

function component() {
    const element = document.createElement('div');
  
    //use my function
    element.textContent = myName('Cody');
    element.classList.add('hello')
  
    return element;
  }
  
  document.body.appendChild(component());