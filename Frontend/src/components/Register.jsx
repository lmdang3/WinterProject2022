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
                email: values.email,
                line1: values.line1,
                line2: values.line2,
                city: values.city,
                state: values.state,
                country: values.country,
                zip: values.zip
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


                                    <div className = "flex">
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
                                        <input type="text" name="middleName" required value={values.middleName} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder = "Optional"/>
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
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            Street Address
                                        </label>
                                        <input type="text" value={values.line1} onChange={handleChange} onBlur={handleBlur} name="line1" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder = "Optional" />
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

