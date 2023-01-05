import React from "react";
import {Link} from 'react-router-dom'; // lets us link pages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
// npm i --save @fortawesome/free-brands-svg-icons
function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}


function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 className="font-semibold uppercase text-lg text-gray-200">
           LZT Book Reviews
        </h1>
        <div>
          <ul className="flex items-center space-x-10 text-sm">
            <li><Link to="/" className="text-gray-400 hover:text-gray-100">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-gray-100">About Us</Link></li>
            <li><Link to="/docs" className="text-gray-400 hover:text-gray-100">Docs</Link></li>
          </ul>
        </div>
        
        <div>
        <ul className="flex items-center space-x-10 text-sm">
        <li> <a href = "https://github.com/lmdang3/WinterProject2022" className="text-gray-100 hover:text-gray-50"> 
        <FontAwesomeIcon icon= {faGithub} /></a> </li>
        <li><a href = "https://www.linkedin.com/in/lam-dang-22684a1a1/" className="text-gray-100 hover:text-gray-50"> 
        <FontAwesomeIcon icon= {faLinkedin} /></a> </li>
        </ul>
        </div>

        <div>
          
          <Button text="Login" bg="bg-gradient-to-r from-purple-500 to-blue-500"/>
        </div>
      </nav>

    




      



    </div>
  );
}

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

</style>
export default Navbar;



