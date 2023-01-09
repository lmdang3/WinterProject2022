import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // lets us link pages
import axios from 'axios';

// this component grabs the most popular books according to the new york times api 
function ComputeAvgRating(array) {

    let data = []
    if (array.length == 0) {
        for (let i = data.length; i < 5; i++) {
            data.push(
                <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            )
        }
        return data
    }

    else {
        const rating = array.map((item) => item.rating);


        var modeMap = {};
        var maxEl = rating[0], maxCount = 1;
        for (var i = 0; i < rating.length; i++) {
            var el = rating[i];
            if (modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;
            if (modeMap[el] > maxCount) {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }

        let data = []

        for (let i = 0; i < maxEl; i++) {
            data.push(
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

            )
        };

        if (data.length != 5) {

            for (let i = data.length; i < 5; i++) {
                data.push(
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                )
            }
        }



        return data
        // return maxEl;

    }
}



function BookReviews() {
    const [totalReactPackages, setTotalReactPackages] = useState([]);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://localhost:3000/bookData/')
            .then(response => setTotalReactPackages(response.data)); // this will return ok



        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (

        <section class="bg-white dark:bg-gray-900">
            {/* this line in the tailwind class aligns the text to the left max-w-2xl */}
            {/* this part of the css controls the sizing of the text xl:text-45xl */}
            <h1 class="text-center mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-45xl dark:text-white">Reviews By Our Users</h1>



            <p class="text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Create an account to leave a review</p>
            {/* by {books.author}, {books.description} */}



            {/* This is my table */}
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="pb-4 bg-white dark:bg-gray-900">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative mt-1">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
                        </input>
                    </div>
                </div>


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
                                ISBN10
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ISBN13
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Rating
                            </th>
                        </tr>
                    </thead>
                    <tbody>


                        {totalReactPackages.map((books) => (

                            <tr key={books._id} onClick="" class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">


                                <td scope="col" class="px-6 py-4">
                                    {books.title}
                                </td>

                                <td scope="col" class="px-6 py-4">
                                    {books.author}
                                </td>

                                <td scope="col" class="px-6 py-4">
                                    {books.isbns.isbn10}
                                </td>
                                <td scope="col" class="px-6 py-4">
                                    {books.isbns.isbn13}
                                </td>
                                <td scope="col" class="flex items-center px-6 py-4">
                                    {ComputeAvgRating(books.userReviews)}
                                </td>



                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>


        </section>




    );
}

export default BookReviews;