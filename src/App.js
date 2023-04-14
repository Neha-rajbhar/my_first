import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/delete' element={<Delete/>}/>
    </Routes>
    </div>
  );
}

export default App;
