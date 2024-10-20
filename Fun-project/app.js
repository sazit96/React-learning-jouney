import React from 'react';
import reactDom from 'react-dom';
import reactImage from './reactLogo.png';
import './style.css';

const page = (
  <div>
    <img src={reactImage} alt="react-img" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was orginally created by Jordan Walke</li>
      <li>Has well over 100k+ Stars on Github</li>
      <li>is maintained by meta</li>
      <li>Powers thousands of enterpirce apps , including mobile apps</li>
    </ul>
  </div>
);

reactDom.render(page, document.getElementById('root'));
