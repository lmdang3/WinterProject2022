// Back up NavBar
import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, BrowserRouter as Router, Route, useNavigate } from 'react-router-dom'; // lets us link pages
// import { EmailContext, PasswordContext } from '../App.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'
// import { EmailContext, PasswordContext } from './../context'


function Navbar() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // setting the state of the user
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAlert, setShowAlert] = useState(false);

  // fetching the session token
  const token = sessionStorage.getItem('token');
  // fetching the data from react query cache
  const { data } = useQuery(['userData']); // is an object of userData
  // checks to see if the data token and data exists before letting the user in
  useEffect(() => {
    console.log('showAlert', showAlert);
    if (token && data) {
      setIsLoggedIn(true)
    }
    // sets up having the token and data as a dependency before setting data
  }, [token, data], [showAlert])


  const handleLoginClick = () => {

    navigate('/login');
  }

  const handleLogoutClick = () => {
    // sets up the logic when a user logs out the token is cleared and then all the userData is also cleared
    setShowAlert(true);
    queryClient.removeQueries('userData')
    sessionStorage.removeItem('token');
    setIsLoggedIn(false)
  }

  const hideAlert = () => {
    setShowAlert(false);
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

          {/* Set it up where if only there is data then the data will appear */}

          {data ? `Welcome, ${data.firstName}` : 'Welcome'}
          {/* {data && <p>Welcome {data.firstName}</p>} */}



        </div>


        <div className="px-6 py-2 text-sm font-semibold uppercase text-white transition">

          {/* great example of props  */}
          <LoginButton onClick={() => isLoggedIn ? handleLogoutClick() : handleLoginClick()} text={isLoggedIn ? "Logout" : "Login"} />



        </div>
      </nav>

    </div>

  )
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



