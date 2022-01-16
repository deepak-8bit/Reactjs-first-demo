import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Switch } from "react-router-dom";


import './App.css';
import Home from './components/Header/Home';
import Contactus from './components/Header/Contactus';
import Aboutus from './components/Header/Aboutus';
import Navbar from './components/Header/Navbar';
// import { Route} from 'react-router-dom';

function App() {
  return (
    

    < div >

    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<Aboutus />} />
      <Route exact path="/contact" element={<Contactus />} />


    </Routes>
      
    </div >
    
  );
}

export default App;
