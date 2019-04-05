import 'core-js/es6/set';
import 'core-js/es6/map';
import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root')
render(<App />, rootEl)

registerServiceWorker();