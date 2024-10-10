import React from 'react';
import reactDom from 'react-dom';
import './style.css';

function MyInfo() {
  return (
    <div className="info-container">
      <h1 className="name">Name: Sazit</h1>
      <p className="description">I love to do coding</p>
      <ul className="hobbies">
        <li>Football</li>
        <li>Cricket</li>
        <li>Badminton</li>
      </ul>
    </div>
  );
}

reactDom.render(<MyInfo />, document.getElementById('root'));
