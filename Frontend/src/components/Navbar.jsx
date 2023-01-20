import React, { useState, useEffect } from 'react';
import { Link, useLocation, BrowserRouter as Router, Route, useNavigate } from 'react-router-dom'; // lets us link pages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Navbar() {
  // setting the state of the user
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  // using useNavigate and useLocation to get data
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(JSON.parse(sessionStorage.getItem('login_data')) || "");


  const [email, setEmail] = useState(data.login_email || "");
  const [password, setPassword] = useState(data.login_password || "");




  // use effect will run every time the page is rendered so if statement is needed to stop the hook
  useEffect(() => {
    if (location.state) {
      if (location.state.hasOwnProperty('login_email') && location.state.hasOwnProperty('login_password')) {
        const { login_email, login_password } = location.state;
        sessionStorage.setItem('login_data', JSON.stringify(location.state));
        // setData(location.state)
        sessionStorage.setItem('login_password', login_password);
        sessionStorage.setItem('login_email', login_email);
        setIsLoggedIn(true)

      }

      return null
    }
  }, [location]);


  // const login_email = location.state?.login_email ?? 'email not provided';
  // const login_password = location.state?.login_password ?? 'password not provided';



  const handleLoginClick = () => {
    navigate('/login');
    // setIsLoggedIn(true)

  }

  const handleLogoutClick = () => {
    sessionStorage.clear()
    setIsLoggedIn(false)


    navigate('/');

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



          {/* <p>{login_email ? login_email : ''}</p>
          <p>{login_password ? login_password : ''}</p> */}

          {/* Needa see if the data is in an object called values or can we call the object right away  */}
          {/* Object is structured based on the state passed this is due to the login passing in two objects called login_email and login_password */}

          {/* <p>{login_data?.login_email}</p>
          <p>{login_data?.login_password}</p> */}

          {/* <p>{data?.login_email}</p>
          <p>{data?.login_password}</p> */}


          {/* <p>{login_data?.email}</p>
          <p>{login_data?.password}</p> */}
          <p>{email}</p>
          <p>{password}</p>



        </div>


        <div className="px-6 py-2 text-sm font-semibold uppercase text-white transition">

          <LoginButton onClick={() => isLoggedIn ? handleLogoutClick() : handleLoginClick()} text={isLoggedIn ? "Logout" : "Login"} />


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



