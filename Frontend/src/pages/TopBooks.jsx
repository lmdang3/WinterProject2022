import React, { useState, useEffect } from 'react';
import axios from 'axios';

// this component grabs the most popular books according to the new york times api 

function GetRequestHooks() {
  const [totalReactPackages, setTotalReactPackages] = useState([]);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    // Data is returned in a array
    axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=DTr7yBLsIAjUnbz7RLNnAvAY64DA2LAB')
      .then(response => setTotalReactPackages(response.data.results)); // this will return ok



    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div class="container p-2 mx-auto">
      <section class="bg-white dark:bg-gray-900">
        {/* this line in the tailwind class aligns the text to the left max-w-2xl */}
        {/* this part of the css controls the sizing of the text xl:text-45xl */}
        <h1 class="text-center mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-45xl dark:text-white">The New York Times Most Popular Books</h1>
        <p class="text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">View some of the most popular books in history</p>
        <main class="w-full ">

          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Book Title
                </th>
                <th scope="col" class="px-6 py-3">
                  Author
                </th>
                <th scope="col" class="px-6 py-3">
                 Description
                </th>
                <th scope="col" class="px-6 py-3">
                 Reviews
                </th>

              </tr>
            </thead>

            <tbody>


{totalReactPackages.map((books) => (

// set up where when click it takes the data to another page
<tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">


    <td scope="col" class="px-6 py-4">
        {books.title}
    </td>

    <td scope="col" class="px-6 py-4">
        {books.author}
    </td>

    <td scope="col" class="px-6 py-4">
      {/* Basically saying books.description or books.description : 'N/A'  */}
    {books.description ? books.description : 'N/A'}
    </td>
 
    {books.reviews.map((rate) => (
   <td scope="col" class="px-6 py-4">

<a href={rate.sunday_review_link || rate.book_review_link || rate.article_chapter_link || rate.first_chapter_link}
 className={rate.sunday_review_link || rate.book_review_link || rate.article_chapter_link || rate.first_chapter_link ? "underline text-blue-600 hover:text-blue-800 visited:text-purple-600" : ""}>


  
  {rate.sunday_review_link ? rate.sunday_review_link : rate.book_review_link ? rate.book_review_link 
  : rate.article_chapter_link ? rate.article_chapter_link : rate.first_chapter_link ? rate.first_chapter_link :'N/A'}
</a>
    
    </td>
))}

</tr>

))}


            </tbody>
          </table>
        </main>
      </section>
    </div>
  );
}

export default GetRequestHooks;

