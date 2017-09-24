import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
