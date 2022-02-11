import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {theme} from './theme'
import {BrowserRouter } from "react-router-dom";




ReactDOM.render(
  <BrowserRouter>
    <App />

  </BrowserRouter>,
  document.getElementById('root')
);


