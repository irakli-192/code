import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavContext from './Components/Context/navContext';
import FetchContext from './Components/Context/fetchContext';


ReactDOM.render(
  <React.StrictMode>
    <FetchContext>
      <NavContext>
        <App />
      </NavContext>
    </FetchContext>
  </React.StrictMode>,
  document.getElementById('root')
);


