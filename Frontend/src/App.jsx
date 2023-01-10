import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import LoginForm from './components/Login';
// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import GetRequestHooks from './pages/TopBooks';
import BookReviews from './pages/BookReviews';

function App() {
  return (
    <Router>
    <div className="pt-20">
      <Navbar />


      
      <Routes>
        {/* sets up the routes */}
        
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path = "/topbooks" element={<GetRequestHooks />} />
        <Route path = "/bookreviews" element={<BookReviews />} />
        <Route path="/nav" element={<Navbar />}/>

        {/* Take to the login */}
        <Route path = "/login" element = {<LoginForm/>} />
        {/* Takes to create a new acct */}


      </Routes>
    </div>
    </Router>
  )
}

export default App
