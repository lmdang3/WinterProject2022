import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from "formik";



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

    if (!values.email) {
        errors.email = "Email is required   ";
    } else if (!regex.test(values.email)) {
        errors.email = "Invalid Email   ";
    }
    else if (values.email && regex.test(values.email)) {
        errors.successfulEmail = "Email submission success!"
    }
    else {
        pass.email = "Email submission success!";
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


    return errors;

};



export const RegisterForm = () => {
    // const [invalidLogin, setinvalidLogin] = useState(null)
    // const navigate = useNavigate();

    const submitForm = (values) => {
        try {
            // where i am at rn the alert will not pass values but data is logged in the console
            console.log(values)
            alert(values)

        }
        catch (error) {
            console.log(error);
        } finally {
            console.log(values)

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

                    <form onSubmit={handleSubmit} class="object-center">
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
                                <div className="container mx-auto">
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="firstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            First Name
                                        </label>
                                        <input type="text" value={values.firstName} name="firstName" required onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                    </div>

                                    {errors.firstName && touched.firstName && (
                                        <div className="text-red-600 text-xs italic">{errors.firstName}</div>
                                    )}

                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="lastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            Last Name
                                        </label>
                                        <input type="text" name="lastName" required value={values.lastName} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                    </div>
                                    {errors.lastName && touched.lastName && (
                                        <div className="text-red-600 text-xs italic">{errors.lastName}</div>
                                    )}








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

                                                    <p className={`text-xs ${errors.successfulEmail ? 'text-green-600' : ''} inline-block`}>  {errors.email || errors.successfulEmail}

                                                        {errors.email && (

                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle inline-block">
                                                                <circle cx={12} cy={12} r={10} />
                                                                <line x1={15} y1={9} x2={9} y2={15} />
                                                                <line x1={9} y1={9} x2={15} y2={15} />
                                                            </svg>
                                                        )}  {errors.successfulEmail && (

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
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            Street Address
                                        </label>
                                        <input type="text" value={values.line1} onChange={handleChange} onBlur={handleBlur} name="line1" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
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
                                        <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
                                            <input type="text" value={values.city} onChange={handleChange} onBlur={handleBlur} name="city" required className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Los Angeles" />
                                            <div className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500 dark:text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="State/Province" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            State/Province
                                        </label>
                                        <input type="text" id="State/Province" value={values.state} onChange={handleChange} onBlur={handleBlur} name="state" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="California" />
                                    </div>
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            Country
                                        </label>
                                        <input type="text" value={values.country} onChange={handleChange} onBlur={handleBlur} name="country" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="United States" />

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
                                        <input type="text" value={values.zip} onChange={handleChange} onBlur={handleBlur} name="zip" required id="ZIP" className="bg-transparent border border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder={86745} />
                                        <div className="flex justify-between items-center pt-1 text-red-400">
                                            {/* <p className="text-xs">Incorrect Zip Code</p> */}

                                        </div>
                                    </div>

                                    <button disabled={isSubmitting} type="submit" class="bg-gray-500 text-white p-2 ml-6 rounded text-lg w-auto">
                                        Create Account
                                    </button>
                                    {/* </Link> */}

                                    <button class="bg-yellow-500 text-white p-2 ml-6 rounded text-lg w-auto">
                                        Cancel
                                    </button>

                                </div>


                            </div>


                        </div>

                    </form>
                );
            }}

        </Formik>

    );
};

