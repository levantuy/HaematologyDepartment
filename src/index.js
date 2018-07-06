import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import config from 'react-global-configuration';
// import configuration from './config';
import App from './App';
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';
//config.set(configuration);
localStorage.setItem("urlApi", 'http://localhost:63260/api/');

ReactDOM.render(<App />, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
