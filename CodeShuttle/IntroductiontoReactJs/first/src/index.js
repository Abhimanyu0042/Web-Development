import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './components/Card';
import Avatar from './components/avatar';
const root = ReactDOM.createRoot(document.getElementById('root'));
// a single root element is there

const name = "Abhi";
//{} is reserved for expressions eg {5+5}
//{{}} is used for style addition
//in css we used to write border-radius: 240px; -> borderRadius: '240px';

const headingStyle = {
    backgroundColor: 'red',
    padding: '20px',
    border: '10px solid green'
};


const sayHi = false;
let subHeading = '';

if(sayHi){
    subHeading = "Hi";
} else{
    subHeading = "Bye";
}

const myvar = (<div>
    <h1 style={headingStyle} className='heading'>Hello i am in JSX calculate {name}</h1>
    <p className='subheading'>{sayHi? "Hi" : "Bye"}</p>
    <p className='subheading'>{subHeading}</p>

</div>);

// function myClock() {
//     root.render(
//         <div>
//         <p style={{fontSize: '4rem'}}>{new Date().toLocaleTimeString()}</p>
//         <h2>This will not get re-rendered</h2>
//         </div>
//     );
//     setTimeout(myClock,1000)
// }

// myClock();

// root.render(myvar);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);








