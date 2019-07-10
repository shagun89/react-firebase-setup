import configureStore from './Store/configureStore'
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { unregister } from './serviceWorker';



ReactDOM.render((<Provider store={configureStore}><App /></Provider> 
  ), document.getElementById('root'));

// unregister();
