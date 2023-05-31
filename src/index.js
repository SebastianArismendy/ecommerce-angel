import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './GlobalComponents/ThemeProvider';
import { CartProvider } from 'react-use-cart';
// import { createRoot } from 'react-dom';


render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
, document.getElementById('root'));



// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <CartProvider>
//         <App />
//       </CartProvider>
//     </ThemeProvider>
//   </React.StrictMode>);

// reportWebVitals();
