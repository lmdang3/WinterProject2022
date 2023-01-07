import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TopBooks from './pages/TopBooks';

function App() {
  return (
    <Router>
    <div className="pt-20">
      <Navbar />


      
      <Routes>
        {/* sets up the routes */}

        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path = "/topbooks" element={<TopBooks />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
