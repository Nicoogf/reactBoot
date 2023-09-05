import React from 'react';
import ReactDOM from 'react-dom/client' ;

// Se añade Boostrap
import 'bootstrap/dist/css/bootstrap.css' ;

// Estilos propios
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

