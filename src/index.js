import React from 'react';
import ReactDOM from 'react-dom/client' ;

// Se añade Boostrap
import 'bootstrap/dist/css/bootstrap.css' ;
import "bootstrap-icons/font/bootstrap-icons.css" ;

// Estilos propios
import './index.css';

import App from './App';
import AppRouting from './AppRoutingUno';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { /* <App /> */ } 
    <AppRouting></AppRouting>
  </React.StrictMode>
);

