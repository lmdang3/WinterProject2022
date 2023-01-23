import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from "formik";
import {useQueryClient, useQuery} from 'react-query'
import { v4 as uuidv4 } from 'uuid';
import JWT from 'js-jwt';
import { QueryCache } from '@tanstack/react-query'

const basedURL = "http://localhost:3000"

const initialValues = {
  email: "",
  password: ""
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }
  else if (!/\d/.test(values.password)) {
    errors.password = 'Password must include at least one number';
  }

  return errors;
};



export const LoginForm = () => {

  const queryClient = useQueryClient();

  const [formValues, setFormValues] = useState();
  const [invalidLogin, setInvalidLogin] = useState(null)
  const navigate = useNavigate()







  // Call useQuery at the top level of the component
  // Tried setting a condition here but it better to have the ternary condition that way access is given to the submit form 

  const submitForm = async (values, { setSubmitting }) => {
    try {
      const basedURL = "http://localhost:3000"
      // Encode the user's email and password as the payload
      const payload = { email: values.email, password: values.password };
      const secretKey = 'SecurityKEYexample'
      const token = JWT.encode(payload, secretKey)
  
      // Send the token in the headers of the axios request
      const { data } = await axios.get(basedURL + `/userData/getToken/${token}`);
  
      if (data) {
        sessionStorage.setItem('token', data);
        const userData = await axios.get(basedURL + `/userData/userlogin/${data}`);
        console.log(userData.data)
        queryClient.setQueryData(['userData'], userData.data);
        navigate('/');
      } else {
        setInvalidLogin("Invalid Login Attempt");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }






  return (

    <Formik

      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isSubmitting
        } = formik;


        return (
          <div onSubmit="" class="bg-white dark:bg-gray-900 flex flex-col justify-center items-center pt-8 pb-12">

            <form onSubmit={handleSubmit} class="object-center">

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Email
                  </label>
                  <input name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="******************" />

                  {errors.email && touched.email && (
                    <div className="text-red-600 text-xs italic">{errors.email}</div>
                  )}

                  {/* <p class="text-gray-600 text-xs italic">Please enter your email</p> */}
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Password
                  </label>
                  <input name="password" value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="******************" />

                  {errors.password && touched.password && (
                    <div className="text-red-600 text-xs italic">{errors.password}</div>
                  )}

                  {/* <p class="text-gray-600 text-xs italic">Please enter your password</p> */}
                </div>
              </div>

              <div class="p-2 flex">
                <div class="w-1/2"></div>
                <div class="w-1/2 flex justify-end">


                  {/* the logging is good alert will showcase the values, only problem is that the link isnt done yet


                {/* <Link to={{
                  pathname: "/nav",
                  state: "" // your data array of objects needa actually fill this  with data
                }}> */}

                  <button disabled={isSubmitting} type="submit" class="bg-gray-500 text-white p-2 ml-6 rounded text-lg w-auto">
                    Login
                  </button>
                  {/* </Link> */}



                  <Link to="/register">
                    <button class="bg-yellow-500 text-white p-2 ml-6 rounded text-lg w-auto">
                      Register
                    </button>
                  </Link>

                </div>
              </div>
            </form>
            <div className="text-red-600 text-xs italic">{invalidLogin}</div>
            {/* {status === 'loading' && <p>Loading...</p>} */}
          </div>

        );
      }}

    </Formik>

  );
};

