import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dom from './Dom';
import Tablemap from './Tablemap';
import Txtclrchange from './Txtclrchange';
import Home1 from './Home1';
import Signup from './Signup';
import A2 from './A2';
import A1 from './A1';
import Loginn from './Loginn';
import Navbarrrrrr from './Navbarrrrrr';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <Dom/>
      <Home1/> */}
      <Navbarrrrrr/>
      <Routes>
        {/* <Route path="/Tablemap" element={<Tablemap/>}/>
        <Route path="/Txtclrchange" element={<Txtclrchange/>}/> */}
         {/* <Route path="/A1" element={<A1/>}/>
         <Route path="/A2" element={<A2/>}/> */}
         <Route path="/Loginn" element={<Loginn/>}/>
         <Route path="/Signup" element={<Signup/>}/>


      </Routes>
      </BrowserRouter>
      <Home1/>
      </div>
  );
}

export default App;
