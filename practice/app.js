import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import Header from './componants/Header';
import Main from './componants/MainComponants';
import Footer from './componants/Footer';

function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDom.render(<Page />, document.getElementById('root'));
