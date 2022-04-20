import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import store from './redux/store'

WebFont.load({
  google: {
    families: ['Iceberg:400', 'cursive', 'Inder:400', 'sans-serif']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);
