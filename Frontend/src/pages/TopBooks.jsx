import React from 'react'
import { Link } from 'react-router-dom'; // lets us link pages


// This page is going to grab data from the new your time developer api and return the top selling data

// Function to get the data 
// function GetData()
// {


// }

// html data
function TopBooks() {



  return (

    <section class="bg-white dark:bg-gray-900">
      {/* this line in the tailwind class aligns the text to the left max-w-2xl */}
      {/* this part of the css controls the sizing of the text xl:text-45xl */}
      <h1 class="text-center mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-45xl dark:text-white">The New York Times Most Popular Books</h1>
      <p class="text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">See the rating of the latest and hottest books according to the New York Times</p>


      <p class="text-center mb-6 text-gray-500 md:text-lg dark:text-black"></p>




    </section>









  )
}



export default TopBooks


