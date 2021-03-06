import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.css'
import App from './App';
import Header from './components/header';
import Counters from './components/counters';


ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Counters />, document.getElementById("counter"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
