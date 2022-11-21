import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import LodgingDetails from './components/LodgingDetails/LodgingDetails'
import About from './components/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<LodgingDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={< PageNotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;