import { Link, Navigate, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from "formik";
import cities from "../data/cities";
import countries from "../data/countries"


// const [inputs, setInputs] = useState({}); // goal is to store the user id. object id  // putting outside cause i can alway just set thestate afterwards
// // used to hold the based url that will be used to look for the user off of their login credentials
// const baseURL = "http://localhost:3000/userData/getcredentials/"






const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    country: "",
    zip: ""

};

const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
        errors.firstName = "First name is required";
    }
    if (!values.lastName) {
        errors.lastName = "Last name is required";
    }

    if (!values.email) {
        errors.email = "Email is required   ";
    } else if (!regex.test(values.email)) {
        errors.email = "Invalid Email   ";
    }
    if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password too short";
      }
      else if (!/\d/.test(values.password)) {
        errors.password = 'Password must include at least one number  ';
      }
    if (!values.line1) {
        errors.line1 = "Street address is required";
    }
    else if (values.line1.length < 6) {
        errors.line1 = "Street address should have at least 6 characters";
    }
    if (!values.city) {
        errors.city = "City is required";
    }
    if (!values.state) {
        errors.state = "state is required";
    }
    if (!values.country) {
        errors.country = "Country is required";
    } else if (values.country.length < 4) {
        errors.country = "Country should have at least 6 characters";
    }

    if (!values.zip) {
        errors.zip = "Zip code is required";
    }
    else if (values.zip.length != 5) {
        errors.zip = "Zip code has few or too many digits";
    }


    return errors;

};



export const RegisterForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const submitForm = (values) => {
        try {

            // where i am at rn the alert will not pass values but data is logged in the console
            console.log(values)
            // alert(values.firstName)
            setLoading(true);
            setIsError(false);
            const data = {
                firstName: values.firstName,
                lastName: values.lastName,
                account:{
                    email: values.email,
                    password: values.password
                },
                address: {
                line1: values.line1,
                line2: values.line2,
                city: values.city,
                state: values.state,
                country: values.country,
                zip: values.zip
                }
            }
            // console.log(payload)
            // grabing the vite env variable
            // POST request using axios inside useEffect React hook
            let baseURL = import.meta.env.VITE_ROOT_API

            axios.post(baseURL + '/userData/', data)
                .then(res => {
                    setData(res.data);
                    setName('');
                    setJob('');
                    setLoading(false);
                }).catch(err => {
                    setLoading(false);
                    setIsError(true);
                });


        }
        catch (error) {
            console.log(error);
        } finally {
            console.log("something has happened")
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

                    <Form onSubmit={handleSubmit} class="object-center">
                        <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">


                            <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                                <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                    <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Personal Information</p>
                                    <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="mx-auto pt-4">
                                <div className="container mx-auto flex-wrap">


                                    <div className="flex">
                                        <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                            <label htmlFor="firstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                First Name
                                            </label>
                                            <input type="text" value={values.firstName} name="firstName" required onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                            {errors.firstName && touched.firstName && (
                                                <div className="text-red-600 text-xs italic">{errors.firstName}</div>
                                            )}
                                        </div>


                                        <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 ml-4">
                                            <label htmlFor="lastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Middle Name
                                            </label>
                                            <input type="text" name="middleName" value={values.middleName} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Optional" />
                                        </div>


                                        <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 ml-4">
                                            <label htmlFor="lastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Last Name
                                            </label>
                                            <input type="text" name="lastName" required value={values.lastName} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                            {errors.lastName && touched.lastName && (
                                                <div className="text-red-600 text-xs italic">{errors.lastName}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex">
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="Email" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            Email
                                        </label>

                                        <div className={`border ${errors.email ? 'border-red-400' : errors.successfulEmail ? 'border-green-400' : ''} shadow-sm rounded flex`}>
                                            <div className={`border ${errors.email ? 'border-red-400' : errors.successfulEmail ? 'border-green-400' : ''} px-4 py-3 dark:text-gray-100 shadow-sm flex items-center border-r`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <rect x={3} y={5} width={18} height={14} rx={2} />
                                                    <polyline points="3 7 12 13 21 7" />
                                                </svg>
                                            </div>
                                            <input type="text"
                                                name="email"
                                                required
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400 ${errors.email ? 'border-red-600 ' : errors.successfulEmail ? 'border-green-600' : ''}`}
                                                placeholder="example@gmail.com"
                                            />
                                        </div>

                                        {/* sets up condtion for the css  */}
                                        {errors && touched.email && (
                                            <div className={`text-${errors.email ? 'red' : 'green'}-600 text-xs italic flex justify-content-end`}>
                                                <div className="inline-block">

                                                    <p className={`text-xs ${!errors.email ? 'text-green-600' : ''} inline-block`}>  {errors.email || "Successful Email"}

                                                        {errors.email && (

                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle inline-block">
                                                                <circle cx={12} cy={12} r={10} />
                                                                <line x1={15} y1={9} x2={9} y2={15} />
                                                                <line x1={9} y1={9} x2={15} y2={15} />
                                                            </svg>
                                                        )}  {!errors.email && (

                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} className="inline-block">
                                                                <path
                                                                    className="heroicon-ui"
                                                                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                                                    0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                                                                    stroke="green"
                                                                    strokeWidth="0.25"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    fill="green"
                                                                />
                                                            </svg>)}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" */}
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 ml-4">
                                        <label htmlFor="password" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            Create Password
                                        </label>

                                        <div className={`border ${errors.password ? 'border-red-400' : errors.successfulpassword ? 'border-green-400' : ''} shadow-sm rounded flex`}>
                                            <div className={`border ${errors.password ? 'border-red-400' : errors.successfulpassword ? 'border-green-400' : ''} px-4 py-3 dark:text-gray-100 shadow-sm flex items-center border-r`}>
                                              <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                              width="20" height="20" viewBox="0 0 574.922 574.922" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g 
                                              id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M491.102,238.031v-33.892c0-27.472-5.39-54.146-16.021-79.278c-10.26-24.255-24.937-46.028-43.624-64.717 c-18.688-18.688-40.462-33.365-64.717-43.623C341.607,5.891,314.934,0.5,287.461,0.5s-54.146,5.391-79.279,16.021 c-24.255,10.259-46.028,24.935-64.717,43.623c-18.688,18.688-33.366,40.462-43.624,64.717 c-10.63,25.133-16.021,51.806-16.021,79.278v33.892c-29.34,2.925-52.328,27.753-52.328,57.85v220.4 c0,32.059,26.082,58.141,58.14,58.141h395.657c32.059,0,58.141-26.082,58.141-58.141v-220.4 C543.431,265.784,520.442,240.957,491.102,238.031z M74.333,516.281v-220.4c0-6.391,3.921-11.865,9.489-14.154 c1.792-0.736,3.753-1.146,5.812-1.146h15.609h21.42h321.6h21.421h15.608c2.058,0,4.02,0.409,5.812,1.146 c5.567,2.289,9.488,7.763,9.488,14.154v220.4c0,8.451-6.85,15.301-15.3,15.301H89.633 C81.183,531.582,74.333,524.73,74.333,516.281z M126.662,204.139c0-88.807,71.993-160.799,160.8-160.799l0,0 c88.807,0,160.8,71.993,160.8,160.799v33.602h-321.6V204.139L126.662,204.139z"></path> <path d="M485.289,574.922H89.632c-32.334,0-58.64-26.306-58.64-58.641v-220.4c0-14.615,5.431-28.626,15.292-39.451 c9.692-10.64,22.83-17.322,37.036-18.849v-33.441c0-27.539,5.403-54.277,16.061-79.473c10.283-24.314,24.997-46.141,43.731-64.875 c18.733-18.733,40.561-33.446,64.875-43.73C233.184,5.403,259.922,0,287.461,0C315,0,341.739,5.403,366.935,16.061 c24.314,10.283,46.142,24.996,64.876,43.73c18.732,18.734,33.446,40.561,43.731,64.875c10.656,25.194,16.06,51.933,16.06,79.473 v33.441c14.207,1.527,27.345,8.21,37.037,18.85c9.861,10.825,15.291,24.835,15.291,39.451v220.4 C543.93,548.616,517.624,574.922,485.289,574.922z M287.461,1c-27.404,0-54.012,5.377-79.084,15.981 c-24.196,10.234-45.916,24.875-64.558,43.516c-18.643,18.643-33.284,40.363-43.517,64.558 c-10.604,25.072-15.981,51.679-15.981,79.083v34.345l-0.451,0.045c-14.132,1.409-27.218,8.005-36.846,18.575 c-9.693,10.64-15.031,24.412-15.031,38.777v220.4c0,31.783,25.857,57.641,57.64,57.641h395.657 c31.783,0,57.641-25.857,57.641-57.641v-220.4c0-14.366-5.338-28.137-15.03-38.777c-9.628-10.569-22.714-17.166-36.848-18.575 l-0.45-0.045v-34.345c0-27.406-5.377-54.014-15.981-79.083c-10.234-24.195-24.875-45.916-43.517-64.558 c-18.643-18.642-40.363-33.283-64.558-43.516C341.474,6.377,314.866,1,287.461,1z M485.291,532.082H89.633 c-8.712,0-15.8-7.088-15.8-15.801v-220.4c0-6.432,3.846-12.169,9.799-14.616c1.91-0.785,3.93-1.183,6.001-1.183h395.658 c2.072,0,4.091,0.398,6.002,1.183c5.952,2.447,9.798,8.185,9.798,14.616v220.4C501.091,524.994,494.003,532.082,485.291,532.082z M89.633,281.082c-1.941,0-3.832,0.373-5.622,1.108c-5.576,2.292-9.179,7.667-9.179,13.691v220.4 c0,8.161,6.639,14.801,14.8,14.801h395.658c8.16,0,14.8-6.64,14.8-14.801v-220.4c0-6.024-3.603-11.399-9.179-13.691 c-1.789-0.735-3.681-1.108-5.621-1.108H89.633z M448.762,238.241h-322.6v-34.102c0-88.941,72.359-161.299,161.3-161.299 s161.3,72.358,161.3,161.299V238.241z M127.162,237.241h320.6v-33.102c0-88.389-71.91-160.299-160.3-160.299 c-88.39,0-160.3,71.91-160.3,160.299V237.241z"></path> </g> <g> <path d="M287.461,302.375c-34.337,0-62.272,27.936-62.272,62.273c0,26.639,16.816,49.422,40.388,58.299v40.58v8.488 c0,5.18,1.838,9.93,4.898,13.635c3.928,4.756,9.871,7.787,16.521,7.787c6.609,0,12.518-2.996,16.447-7.701 c3.104-3.717,4.973-8.5,4.973-13.721v-8.357v-40.369c24.059-8.623,41.317-31.652,41.317-58.641 C349.734,330.311,321.799,302.375,287.461,302.375z M287.461,384.082c-10.732,0-19.433-8.701-19.433-19.434 s8.701-19.434,19.433-19.434s19.433,8.701,19.433,19.434S298.194,384.082,287.461,384.082z"></path> <path d="M286.997,493.938c-6.562,0-12.724-2.904-16.907-7.969c-3.233-3.914-5.013-8.869-5.013-13.953v-48.724 c-24.171-9.257-40.388-32.779-40.388-58.644c0-34.613,28.16-62.773,62.772-62.773s62.773,28.16,62.773,62.773 c0,26.31-16.59,49.972-41.317,58.991v48.376c0,5.125-1.808,10.111-5.089,14.041C299.646,491.065,293.511,493.938,286.997,493.938z M287.461,302.875c-34.062,0-61.772,27.712-61.772,61.773c0,25.566,16.101,48.807,40.064,57.831l0.324,0.122v49.414 c0,4.852,1.699,9.581,4.784,13.316c3.992,4.833,9.874,7.605,16.136,7.605c6.216,0,12.071-2.741,16.063-7.521 c3.132-3.751,4.856-8.51,4.856-13.4v-49.078l0.331-0.119c24.516-8.786,40.986-32.163,40.986-58.17 C349.234,330.587,321.523,302.875,287.461,302.875z M287.461,384.582c-10.991,0-19.933-8.942-19.933-19.934 s8.942-19.934,19.933-19.934s19.933,8.942,19.933,19.934S298.452,384.582,287.461,384.582z M287.461,345.715 c-10.439,0-18.933,8.493-18.933,18.934s8.493,18.934,18.933,18.934c10.44,0,18.933-8.493,18.933-18.934 S297.901,345.715,287.461,345.715z"></path> </g> </g> </g></svg>
                                            </div>
                                            <input type="password"
                                                name="password"
                                                required
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400 ${errors.password ? 'border-red-600 ' : errors.successfulpassword ? 'border-green-600' : ''}`}
                                                placeholder="*************"
                                            />
                                        </div>

                                        {/* sets up condtion for the css  */}
                                        {errors && touched.password && (
                                            <div className={`text-${errors.password ? 'red' : 'green'}-600 text-xs italic flex justify-content-end`}>
                                                <div className="inline-block">

                                                    <p className={`text-xs ${!errors.password ? 'text-green-600' : ''} inline-block`}>  {errors.password || "Successful password"}

                                                        {errors.password && (

                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle inline-block">
                                                                <circle cx={12} cy={12} r={10} />
                                                                <line x1={15} y1={9} x2={9} y2={15} />
                                                                <line x1={9} y1={9} x2={15} y2={15} />
                                                            </svg>
                                                        )}  {!errors.password && (

                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} className="inline-block">
                                                                <path
                                                                    className="heroicon-ui"
                                                                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                                                0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                                                                    stroke="green"
                                                                    strokeWidth="0.25"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    fill="green"
                                                                />
                                                            </svg>)}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    </div>

                                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Location Information </p>
                                            <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            Street Address
                                        </label>
                                        <input type="text" value={values.line1} onChange={handleChange} onBlur={handleBlur} name="line1" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Optional" />
                                        {errors.line1 && touched.line1 && (
                                            <div className="text-red-600 text-xs italic">{errors.line1}</div>
                                        )}
                                    </div>

                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            Street Address 2
                                        </label>
                                        <input type="text" value={values.line2} onChange={handleChange} onBlur={handleBlur} name="line2" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Optional" />
                                    </div>

                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            City
                                        </label>

                                        <Field as="select" name="city" value={values.city} className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none" >
                                            <option className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none" value="" disabled>Select a city</option>
                                            {cities.map((city) => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </Field>
                                    </div>


                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="State/Province" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            State/Province
                                        </label>
                                        <input type="text" id="State/Province" value={values.state} onChange={handleChange} onBlur={handleBlur} name="state" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="California" />
                                        {errors.state && touched.state && (
                                            <div className="text-red-600 text-xs italic">{errors.zip}</div>
                                        )}
                                    </div>
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            Country
                                        </label>
                                        <input type="text" value={values.country} onChange={handleChange} onBlur={handleBlur} name="country" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="United States" />
                                        {errors.country && touched.country && (
                                            <div className="text-red-600 text-xs italic">{errors.country}</div>
                                        )}
                                    </div>
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <div className="flex items-center pb-2">
                                            <label htmlFor="ZIP" className="text-sm font-bold text-gray-800 dark:text-gray-100">
                                                ZIP/Postal Code
                                            </label>
                                            <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                        <input type="text" value={values.zip} onChange={handleChange} onBlur={handleBlur} name="zip" required id="ZIP" className="bg-transparent border pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder={86745} />
                                        {errors.zip && touched.zip && (
                                            <div className="text-red-600 text-xs italic">{errors.zip}</div>
                                        )}

                                        <div className="flex justify-between items-center pt-t ">
                                        </div>
                                    </div>

                                    <button disabled={isSubmitting} type="submit" class="bg-gray-500 text-white p-2 ml-6 rounded text-lg w-auto">
                                        Create Account
                                    </button>
                                    {/* </Link> */}

                                    <Link to="/login">
                                        <button class="bg-yellow-500 text-white p-2 ml-6 rounded text-lg w-auto">
                                            Cancel
                                        </button>
                                    </Link>

                                </div>


                            </div>


                        </div>

                    </Form>
                );
            }}

        </Formik>

    );
};

