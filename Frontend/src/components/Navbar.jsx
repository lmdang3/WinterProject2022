import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, BrowserRouter as Router, Route, useNavigate } from 'react-router-dom'; // lets us link pages
// import { EmailContext, PasswordContext } from '../App.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useQuery } from 'react-query'
// import { EmailContext, PasswordContext } from './../context'


function Navbar() {
  // check if token exists in the session storage
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('token'));
  const [credentials, setCredentials] = useState(null);



  // const coolClick = () => {
  //   setIsLoggedIn(prevState => prevState ?  false : true ) 
  // }


  useEffect(() => {
    if (isLoggedIn) {
      // retrieve the data from the cache using the email and password stored in the session storage
      const email = sessionStorage.getItem('email');
      const password = sessionStorage.getItem('password');

      const { data, status, error, refetch } = useQuery(['credentials', email, password], () => {
        return axios.get(`http://localhost:3000/userData/getcredentials/${email}/${password}`)
      }, {
        cacheTime: 60 * 60 * 1000, // cache the response for 1 hour
      });

      setCredentials(data);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <p>You are not logged in</p>;
  }

  return (
    <>
      <p>Welcome, {credentials?.name}</p>
      <button onClick={() => sessionStorage.removeItem('token')}>Logout</button>
    </>
  );

  // if (status === 'loading' || status === 'idle') {
  //   return <p>Loading...</p>
  // }

  // if (status === 'error') {
  //   return <p>Error: {error.message}</p>
  // }

  // if (isLoggedIn) {
  //   return <p>Welcome, {userData.name}</p>
  // } else {
  //   return <p>You are not logged in</p>
  // }



  const handleLoginClick = () => {
    navigate('/login');

  }

  const handleLogoutClick = () => {
    // sessionStorage.clear()
    setIsLoggedIn(false)

    navigate('/');
  }



  




  



  // return (
  //   <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
  //     <nav className="flex items-center container mx-auto h-full justify-between">
  //       <h1 className="font-semibold uppercase text-lg text-gray-200">
  //         LZT Book Reviews
  //       </h1>
  //       <div>
  //         <ul className="flex items-center space-x-10 text-sm">
  //           <li><Link to="/" className="text-gray-400 hover:text-gray-100">Home</Link></li>
  //           <li><Link to="/about" className="text-gray-400 hover:text-gray-100">About Us</Link></li>
  //           <li><Link to="/bookreviews" className="text-gray-400 hover:text-gray-100">Reviews</Link></li>
  //           <li><Link to="/docs" className="text-gray-400 hover:text-gray-100">Docs</Link></li>
  //         </ul>
  //       </div>
  //       <div>
  //         <ul className="flex items-center space-x-10 text-sm">
  //           <li> <a href="https://github.com/lmdang3/WinterProject2022" className="text-gray-100 hover:text-gray-50">
  //             <FontAwesomeIcon icon={faGithub} /></a> </li>
  //           <li><a href="https://www.linkedin.com/in/lam-dang-22684a1a1/" className="text-gray-100 hover:text-gray-50">
  //             <FontAwesomeIcon icon={faLinkedin} /></a> </li>
  //         </ul>
  //       </div>
  //       <div></div>
  //       <div className=" text-sm font-semibold uppercase text-white">

  //         {/* Set it up where if only there is data then the data will appear */}

  //       </div>
  //       <div className="px-6 py-2 text-sm font-semibold uppercase text-white transition">
  //         <LoginButton onClick={() => isLoggedIn ? handleLogoutClick() : handleLoginClick()} text={isLoggedIn ? "Logout" : "Login"} />
  //       </div>
  //     </nav>
  //   </div>

  // )
}


const LoginButton = (props) => {

  return (
    <button onClick={props.onClick} className="
    px-6 py-2 text-sm font-semibold uppercase 
   rounded-sm text-white transition bg-gradient-to-r from-purple-500 to-blue-500">
      <span>{props.text}</span>
    </button>
  )
}




export default Navbar;



