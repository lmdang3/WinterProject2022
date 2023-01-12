import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // lets us link pages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';
// npm i --save @fortawesome/free-brands-svg-icons


function Navbar() {
  // setting the state of the user
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)

  // function that will get the user data
  const getUserData = () => {
    const baseURL = "http://localhost:3000/userData/getcredentials/lamdang274586@gmail.com/lamdang123"

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setUserData(response.data);
      });
    }, []);

    if (!userData) return "No post!"
    return (
      
        <p> Hello {userData.firstName}</p>
    
    );
    
  }


  const handleLoginClick = () => {
    setIsLoggedIn(true)
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false)
  }

  // const coolClick = () => {
  //   setIsLoggedIn(prevState => prevState ?  false : true ) 
  // }


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
            <li><Link to="/bookreviews" className="text-gray-400 hover:text-gray-100">Reviews</Link></li>
            <li><Link to="/docs" className="text-gray-400 hover:text-gray-100">Docs</Link></li>

          </ul>
        </div>

        <div>
          <ul className="flex items-center space-x-10 text-sm">
            <li> <a href="https://github.com/lmdang3/WinterProject2022" className="text-gray-100 hover:text-gray-50">
              <FontAwesomeIcon icon={faGithub} /></a> </li>
            <li><a href="https://www.linkedin.com/in/lam-dang-22684a1a1/" className="text-gray-100 hover:text-gray-50">
              <FontAwesomeIcon icon={faLinkedin} /></a> </li>
          </ul>
        </div>

        <div></div>
 
        <div className=" text-sm font-semibold uppercase text-white">
            {getUserData()}
        </div>


        <div className="px-6 py-2 text-sm font-semibold uppercase text-white transition">
          <Link to="/login">
            <LoginButton onClick={() => isLoggedIn  ? handleLogoutClick() : handleLoginClick()} text={isLoggedIn ? "Logout" : "Login"} />
          </Link>

        </div>
      </nav>

    </div>

  );
}



// <Greeting isLoggedIn={isLoggedIn} />
// {button}
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


// function LoginButton(props) {
//   return (         // would need the return statement if i used the curly brackets, thats typically used in conjuction with declaring more functions
//     <button onClick={props.onClick} className="
//     px-6 py-2 text-sm font-semibold uppercase 
//    rounded-sm text-white transition bg-gradient-to-r from-purple-500 to-blue-500">
//       <span>{props.text}</span>
//     </button>
//   );
// }

// they both do the same thing 

const LoginButton = (props) => {

  return (
    <button onClick={props.onClick} className="
    px-6 py-2 text-sm font-semibold uppercase 
   rounded-sm text-white transition bg-gradient-to-r from-purple-500 to-blue-500">
      <span>{props.text}</span>
    </button>
  )
}



// function LoginButton (props)  {

//   return (
//     <button onClick={props.onClick} className="
//     px-6 py-2 text-sm font-semibold uppercase 
//    rounded-sm text-white transition bg-gradient-to-r from-purple-500 to-blue-500">
//       <span>{props.text}</span>
//     </button>
//   )
// }


export default Navbar;



