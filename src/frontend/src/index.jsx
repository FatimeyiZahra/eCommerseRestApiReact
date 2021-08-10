import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App'
import CartContext from './app/cart/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <CartContext>
    <App />
    </CartContext>
  </React.StrictMode>,
  document.getElementById('root')
);
