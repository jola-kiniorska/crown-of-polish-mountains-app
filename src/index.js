import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss';
import WebFont from 'webfontloader';

WebFont.load({
   google: {
     families: ['Iceberg:400', 'cursive']
   }
});

ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
