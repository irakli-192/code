import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavContext from './Components/Context/navContext';


ReactDOM.render(
  <React.StrictMode>
    <NavContext>
      <App />
    </NavContext>
  </React.StrictMode>,
  document.getElementById('root')
);


