import logo from './logo.svg';
import './App.css';

import Guess from './GuessLucky/guessLuckyNumber';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Router/aboutUs';
import Login from './Router/login';
import Register from './Router/register';
import Navbar from './Navbar/navbar';
import Home from './Router/home';

function App() {
  return (
    <div className="App">
   
    <Guess/>
    {/* <Navbar/> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes> */}
    </div>
  );
}

export default App;
