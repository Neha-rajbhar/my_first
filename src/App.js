
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home.js';
import Contact from './Pages/Contact.js';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Navbar/> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
