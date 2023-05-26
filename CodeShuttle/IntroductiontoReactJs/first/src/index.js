import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const myvar = <h1>Hello i am in JSX</h1>

root.render(myvar) 

// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );

