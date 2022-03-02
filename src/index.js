import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from './context/Context';

ReactDOM.render(
  <Router>
    <Context.Provider>
      <App />
    </Context.Provider>
  </Router>,
  document.getElementById('root')
);
