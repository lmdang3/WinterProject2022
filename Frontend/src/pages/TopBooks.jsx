import React, { useState, useEffect } from 'react';
import axios from 'axios';

// this component grabs the most popular books according to the new york times api 

function GetRequestHooks() {
  const [totalReactPackages, setTotalReactPackages] = useState([]);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=DTr7yBLsIAjUnbz7RLNnAvAY64DA2LAB')
    .then(response => setTotalReactPackages(response.data.results)); // this will return ok



    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (

    <section class="bg-white dark:bg-gray-900">
      {/* this line in the tailwind class aligns the text to the left max-w-2xl */}
      {/* this part of the css controls the sizing of the text xl:text-45xl */}
      <h1 class="text-center mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-45xl dark:text-white">The New York Times Most Popular Books</h1>
      <p class="text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">View some of the most popular books in history</p>


      {totalReactPackages.map(books =>
      <p class="text-center mb-6 text-gray-500 md:text dark:text-black">  {books.title}, by {books.author}, {books.description}
           </p>,
      
             
            )} 
            
            

    </section>
  );
}

export default GetRequestHooks;

