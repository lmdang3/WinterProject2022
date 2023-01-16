import React from 'react';
import { useState } from 'react';


const Docs = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const portData = () => (

    <div>

      <p className="custom-spacing text-m " style={styles.customSpacing}>View Some Projects</p>
      <a href="https://github.com/CIS-Fall-2022/project-cis_4339_project_5"><p className="mt-2 text-m text-blue-600 dark:text-blue-500 hover:underline" >Event Management App (JavaScript, Mongo DB, Vue JS)</p></a>
      <a href="https://github.com/lmdang3/WinterProject2022"><p className="mt-2 text-m text-blue-600 dark:text-blue-500 hover:underline" >Book Review App (JavaScript, Mongo DB, Reac JS)</p></a>
      <a href="https://github.com/CIS-Spring-2022/final-project-cis3368-lamandkaris"><p className="mt-2 text-m text-blue-600 dark:text-blue-500 hover:underline" >Vacation Planner (Flask, Mysql, Ejs)</p></a>
    </div>
  )


  return (
    <div class="container p-2 mx-auto">

      <h1 class="text-center mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-45xl dark:text-white">About Creator</h1>
      <p class="text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">See the reasons as to why this application was created</p>





      <main class="w-full ">
        <div>
          <h2 className='font-bold'>Introduction</h2>


          <p className="text-m custom-spacing" style={styles.customSpacing}> Hello my name is Lam Dang and I am the developer who created this web app. I am a Computer Information Systems major who is pursing the field of software engineering.
            The web application was created for the intended purpose of self-improvement and adding to my list of technical skills. As a aspring developer,
            I know that there are many skills that we all must learn. My goal for the Winter Break of 2022 to learn and practice the frontend framework called React. React,
            in my opinion, is the most popular framework with objectively one of the largest communities. I also made sure to create the application from scratch so I can learn all of the dependencies required for a application to run.
            For the project I already knew that I wanted to follow the agile methology.

            {/* Right container that uses the style float right so that the text is wrapped */}
            <div id="myimage" className="d-flex align-items-center text-right " style={{ float: 'right' }}>
              <br></br>
              <img id="profile-image" src="src/images/lamHeadShot.jpg" alt="Profile Picture" className="rounded-full ml-auto" />
              <p className="custom-spacing text-xs " style={styles.customSpacing}>Name: Lam Dang</p>
              <a href="mailto: Lamdang274586@gmail.com"> <p className="mt-2 text-xs text-blue-600 dark:text-blue-500 hover:underline" >Email: Lamdang274586@gmail.com</p></a>
              <a href="mailto: Lmdang@cougarnet.edu">    <p className="mt-2 text-xs text-blue-600 dark:text-blue-500 hover:underline" >Secondary Email: Lmdang@cougarnet.edu </p></a>
              <a href="https://www.linkedin.com/in/lam-dang-22684a1a1/"><p className="mt-2 text-xs text-blue-600 dark:text-blue-500 hover:underline" >Linkedin: lmdang</p></a>
              <br></br>
            </div>

            I was going to develope the application in two sprints.
            Following this methodlogy will allow me to create functions as needed and will allow for faster delivery.At the start of the break I quickly drafted and selected a topic, which was to create a fullstack web app (mongodb, javascript, react) that allows
            for a user to view new books as well as leave a review. There were many open source apis for me to gather data from as well as many different ways I can use the data.
            Of course, to support business cases I would limit some of the functionalities a user have access to if they do have an account.
            One of the key aspects of the project was going to be making sure I could create the login that authenticates the user. </p>


          <h2 className='font-bold mt-2'>Sprint 1: Backend</h2>
          <p className="text-m mt-1" style={styles.customSpacing}> I believe that I am a strong backend developer. I have a solid understanding of databases and I enjoy the process of querying data.
            As for this specific project, I wanted to mentor a friend and teach them how to use mongodb along side the mongoose ODM tool. This is the reason as to why I decided to select mongodb to store my data.
            Creating the schema was the most difficult part of this sprint. Making sure that the structure of the collections supported functionality was a key component. Due tro the complication of functionalities, the structure of the
            database had to be changed on multiple occasions. Api routes were created as needed to support the needs of the application. Altogether this sprint was done fairly quickly.  </p>


          <h2 className='font-bold mt-2'>Sprint 2: Frontend</h2>
          <p className="text-m mt-1" style={styles.customSpacing}> Although I have had experience with react and making single page applications, I would not consider myself an expert. Knowing this weakness, I decided to create my web app using
            the react frontend framework. Luckily, I have peers around me as well as the internet to use as resources with when working with react's native libraries. Creating pages vary in terms of diffculty. When using React I had to make sure I am correctly
            handling state management. This made fetching and using data difficult.</p>



          <h2 className='font-bold mt-2'>Learning</h2>
          <p className="text-m mt-1"> From my short time working with React I learned of many of the efficiencies that come with using this framework. There are many forms of state management which a developer can you for a given task.
            For this project I used local storage so data is used and then cleared unless it is saved. Using this method will limit the amount of data that can be saved at a given time and it is not recommended in a production environment. My main take
            Away from this project is learning how functional components work within react, state management, lifecycle hooks, and tailwind css. After working with tailwind from installation to the UI, I learned how convenient it is to have tailwind as a css tool.
            Css files no longer have to be cluttered with data. Another plus from doing this project was the knowledge I gained from using vite and vite JIT. Vite is a frontend build tool that simplifies the installation of frameworks. it installs only
            What is needed and loaded only what is requested. JIT ( just in time) is a great feature of vite that allows the application to quickly load css. Overall, the project allowed me to learn so much in the time given and I am surely glad I took the initiative to do it.  </p>

          <button onClick={() => setShowPortfolio(!showPortfolio)} className="font-bold text-m mt-1 marker:tab-button">
            Portfolio - Click here to {showPortfolio ? "hide" : "view"}
          </button>

          {/* Where the Scenario is applied if the data is set then it show else false */}
          {showPortfolio ? portData() : null}

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
