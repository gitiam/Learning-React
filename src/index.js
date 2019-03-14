import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderComponent from './components/Header.component.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HeaderComponent />, document.getElementById('root'));
//ReactDOM.render(<img src={caracol} alt="caracol"/>, document.getElementById('pruebas'));

serviceWorker.unregister();
