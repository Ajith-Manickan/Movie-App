import React ,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import Rawpost from './components/Rawpost/Rawpost'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';


function App() {
  
  return (
    <div className="Ap col-12">

    <BrowserRouter>

    <Routes>
      <Route exact path="/" element={<>
      
        <Navbar/>
        <Banner/>
        <Rawpost/></>
    }></Route>
      <Route exact path="/admin" element={ <>
        <Navbar/>
        <div className='App'><Todo/></div>
        </>
      }></Route>
    </Routes>

     
        
    
     




    </BrowserRouter>
    </div>


  );
}

export default App;
