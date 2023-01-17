import React from 'react';
import { useState } from 'react';


const Docs = () => {



  return (
    <div class="container p-2 mx-auto">

      <h1 class="text-center mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-45xl dark:text-white">Application Documentation</h1>
      <p class="text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">See the reasons as to why this application was created</p>





      <main class="w-full ">
        <div>
          <h2 className='font-bold'>Introduction</h2>


          <p className="text-m mt-2" > Hello my name is Lam Dang and I am the developer who created this web app. I am a Computer Information Systems major who is pursing the field of software engineering.
            The web application was created for the intended purpose of self-improvement and adding to my list of technical skills. As a aspring developer,
            I know that there are many skills that we all must learn. My goal for the Winter Break of 2022 to learn and practice the frontend framework called React. React,
            in my opinion, is the most popular framework with objectively one of the largest communities. I also made sure to create the application from scratch so I can learn all of the dependencies required for a application to run.
            For the project I already knew that I wanted to follow the agile methology.

            I was going to develope the application in two sprints.
            Following this methodlogy will allow me to create functions as needed and will allow for faster delivery. At the start of the break I quickly drafted and selected a topic, which was to create a fullstack web app (mongodb, javascript, react) that allows
            for a user to view new books as well as leave a review. There were many open source apis for me to gather data from as well as many different ways I can use the data.
            Of course, to support business cases I would limit some of the functionalities a user have access to if they do have an account.
            One of the key aspects of the project was going to be making sure I could create the login that authenticates the user. </p>

          <h2 className='font-bold mt-2'>Purpose</h2>


          <p className="text-m mt-2" > The intended purpose of the application was to find new books for the user to read. This was done fetching Data from the NewYorkTimes popular books api. From here the data will be fetched and manipulated
          Furthermore, the app would also display data within the database that is already there. The data presented from the database will showcase information on the books names,isbn numbers,and rating. The application is intended for users to leave a rating on books
          they cannot leave a review without creating an account. </p>


          <h2 className='font-bold mt-2'>Sprint 1: Backend</h2>
          <p className="text-m mt-2" > I believe that I am a strong backend developer. I have a solid understanding of databases and I enjoy the process of querying data.
            As for this specific project, I wanted to mentor a friend and teach them how to use mongodb along side the mongoose ODM tool. This is the reason as to why I decided to select mongodb to store my data.
            Creating the schema was the most difficult part of this sprint. Making sure that the structure of the collections supported functionality was a key component. Due tro the complication of functionalities, the structure of the
            database had to be changed on multiple occasions. Api routes were created as needed to support the needs of the application. Altogether this sprint was done fairly quickly.  </p>


          <h2 className='font-bold mt-2'>Sprint 2: Frontend</h2>
          <p className="text-m mt-2" > Although I have had experience with react and making single page applications, I would not consider myself an expert. Knowing this weakness, I decided to create my web app using
            the react frontend framework. Luckily, I have peers around me as well as the internet to use as resources with when working with react's native libraries. Creating pages vary in terms of diffculty. When using React I had to make sure I am correctly
            handling state management. This made fetching and using data difficult.</p>



          <h2 className='font-bold mt-2'>Learning</h2>
          <p className="text-m mt-2"> From my short time working with React I learned of many of the efficiencies that come with using this framework. There are many forms of state management which a developer can you for a given task.
            For this project I used local storage so data is used and then cleared unless it is saved. Using this method will limit the amount of data that can be saved at a given time and it is not recommended in a production environment. My main take
            away from this project is learning how functional components work within react, state management, lifecycle hooks, and tailwind css. After working with tailwind from installation to the UI, I learned how convenient it is to have tailwind as a css tool.
            By using tailwind within your project the css files no longer have to be cluttered with data. Another plus from doing this project was the knowledge I gained from using vite and vite JIT. Vite is a frontend build tool that simplifies the installation of frameworks. it installs only
            What is needed and loaded only what is requested. JIT ( just in time) is a great feature of vite that allows the application to quickly load css. Overall, the project allowed me to learn so much in the time given and I am surely glad I took the initiative to do it.  </p>


        </div>
      </main>

    </div>

  );
};


const styles = {
  customSpacing: {
    marginTop: '1rem'
  }
}





export default Docs;
