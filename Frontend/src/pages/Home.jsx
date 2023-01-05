import React from 'react'

function Home() {

  return (
    <main>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="place-self-center mr-auto lg:col-span-7">
            <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">View the latest and top rated books</h1>
            <p class="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">See what reviewers have to say on these popular books. Why not give an opinion, leave a review below.</p>
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Explore The Top Rated Books
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://blog.blankbaby.com/wp-content/uploads/2022/05/6a00d8341c44f153ef01bb0915584a970d-pi.jpg" alt="mockup" />
          </div>
        </div>


      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h2 class="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 lg:mb-16 dark:text-white md:text-4xl">This web application was built using</h2>
          <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">

            {/* new york time api logo */}
            <a href="#" class="flex justify-center items-center">
              <img src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/VSXS5HOGENG7PJ34XE2L3R2ZF4.jpg" alt="mockup" />
            </a>

            {/* new york time  logo */}
            <a href="#" class="flex justify-center items-center">
              <img src="https://1000logos.net/wp-content/uploads/2017/04/New-York-Times-logo.jpg" alt="mockup" />
            </a>

            {/* Mongo db logo  */}
            <a href="#" class="flex justify-center items-center">
              <img src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg " />
            </a>

            {/* React logo  */}
            <a href="#" class="flex justify-center items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" width="100" height="75" />
            </a>

            {/* Vite Logo  */}
            <a href="#" class="flex justify-center items-center">
              <img src="https://pbs.twimg.com/media/EtZYf1FWYAMmtHj.jpg" />
            </a>

            {/* JS Logo  */}
            <a href="#" class="flex justify-center items-center">
              <img src="data:image/png;base64,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" />
            </a>




          </div>
        </div>
      </section>

    </main>






  )
}



export default Home


