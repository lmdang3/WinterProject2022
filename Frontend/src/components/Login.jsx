import {Link} from 'react-router-dom'; // lets us link pages
import { useQuery } from "react-query";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const [inputs, setInputs] = useState({}); // goal is to store the user id. object id  // putting outside cause i can alway just set thestate afterwards
// // used to hold the based url that will be used to look for the user off of their login credentials



export const SmallButton = () => {
    const [userData, setUserData] = useState(null)
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



  };

  // export function SmallButton() {
  //   return <p> test </p>;
  // }






export default function LoginForm() {
  // const { register, handleSubmit, errors, reset } = useForm();
  
  return (
    <div class="bg-white dark:bg-gray-900 flex flex-col justify-center items-center pt-8 pb-12">

      <form class="object-center">

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Email
            </label>
            <input  name="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="******************" />
            <p class="text-gray-600 text-xs italic">Please enter your email</p>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Password
            </label>
            <input name="password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
            <p class="text-gray-600 text-xs italic">Please enter your password</p>
          </div>
        </div>
      
        <div class="p-2 flex">
    <div class="w-1/2"></div>
    <div class="w-1/2 flex justify-end">
      
      <Link to = {{
    pathname: "/nav",
    state: "" // your data array of objects needa actually fill this  with data
  }}>
        <button type="submit" class="bg-gray-500 text-white p-2 ml-6 rounded text-lg w-auto">
           Login
        </button>
        </Link>



        <Link to = "/about">
        <button type="submit" class="bg-yellow-500 text-white p-2 ml-6 rounded text-lg w-auto">
            Register
        </button>
        </Link>

    </div>
</div>
      </form>

    </div>
  )
}

