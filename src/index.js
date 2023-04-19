import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Flip from './Flip';
import Dom from './Dom';
import Ternary from './Ternary';
import Sample from './Sample';
import State from './State';
import Tablemap from './Tablemap';
import Userprovider from './Context/Userprovider';
import A from './A';
import B from './B';
import Obj from './Obj';
import Spread1 from './Spread1';
import Txtclrchange from './Txtclrchange';
import Useeffect from './Useeffect';
import Apii from './Apii';
import Effect from './Effect';
import Props1 from './Props1';
import Addtable from './Addtable';
import Apiaxios from './Apiaxios';
import Newapi from './Newapi';
import Home from './Home';

// import Login from './Login';

import Navbarrrrrr from './Navbarrrrrr';
import Loginn from './Loginn';
import A1 from './A1';
import Signup from './Signup';
import A2 from './A2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Userprovider>
  <React.StrictMode>
    {/* <Home>
    <App />
    </Home>
    <Flip/>
    <Dom/>
    <Sample/>
     <Ternary/>
    <State/>
    
    <Txtclrchange/>

    <Useeffect/>
    <Apii/>
    <Tablemap/>
    <A/>
    <B/>
    <Obj/>
    <Spread1/>
    <Effect/>
    <Props1/>
    <Addtable/>
    <Apiaxios/>
    <Newapi/>  */}
    {/* <Login/> */}
  
    <Loginn/>
    <A1/>

    <A2/>
    
    <Signup/>
    <Navbarrrrrr/>
  </React.StrictMode>
  </Userprovider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
