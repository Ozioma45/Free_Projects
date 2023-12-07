import _ from 'lodash';

//import my function
import myName from './myName';

import Icon from './icon.png';

//import css file
import './style.css';

import Data from './data.xml';
import Notes from './data.csv';
function component() {
    const element = document.createElement('div');
  
    //use my function
    element.textContent = myName('Cody');
    element.classList.add('hello')

     // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
  
    console.log(Data);
      console.log(Notes);


    return element;
  }
  
  document.body.appendChild(component());