import React from 'react';
import { useState } from 'react';


const AboutMe = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const portData = () => (

    <div>

      <p className="custom-spacing text-m " style={styles.customSpacing}>View Some Projects</p>
      <a href="https://github.com/CIS-Fall-2022/project-cis_4339_project_5"><p className="mt-2 text-m text-blue-600 dark:text-blue-500 hover:underline" >Event Management App (JavaScript, Mongo DB, Vue JS)</p></a>
      <a href="https://github.com/lmdang3/WinterProject2022"><p className="mt-2 text-m text-blue-600 dark:text-blue-500 hover:underline" >Book Review App (JavaScript, Mongo DB, Reac JS)</p></a>
      <a href="https://github.com/CIS-Spring-2022/final-project-cis3368-lamandkaris"><p className="mt-2 text-m text-blue-600 dark:text-blue-500 hover:underline" >Vacation Planner (Flask, Mysql, Ejs)</p></a>
    </div>
  )


  const skillsData = () => (

    <div>

      <p className="custom-spacing text-m text-bold " style={styles.customSpacing}>My Technical Skills</p>
      <p className="mt-2 text-m" >Languages: (Python, Javascript, C++)</p>
      <p className="mt-2 text-m" >Frameworks: (React JS, Vue JS)</p>
      <p className="mt-2 text-m" >Databases: (Oracle Sql, MS Management Studios, MySQL, Mongo DB )</p>
      <p className="mt-2 text-m" >Certifications: (MS Office Specialist, Incoterms Supply Chain Management )</p>
    </div>
  )


  return (
    <div class="container p-2 mx-auto">

      <h1 class="text-center mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-45xl dark:text-white">About Creator</h1>
      <p class="text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Learn about Lam </p>





      <main class="w-full ">
        <div>
          <h2 className='font-bold'>Introduction</h2>


          <p className="text-l custom-spacing" style={styles.customSpacing}> Hello my name is Lam Dang and I am the developer who created this web app. I am a Computer Information Systems major who is pursing the field of software engineering. I really enjoy programming
            and powerlifting on my freetime. One of my previous experiences in the industry was intern as a business analyst for Accenture.
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
            It was during my time at accenture that I learned the importance of team work and the importance of testing before deployment.  However, it was my sophmore year of college that made me decide to go down the route of being a developer.
            I realized that I put alot of time into learning to programing and problem solve, but most importantly
            I find the process to be enjoyable. Over the course of undergrad my higher level course reaffirm my interest in the field of software developement. I enjoy the challenges presented with problem solving and I approach programming with
            the mindset of finding a solution for every problem.
            All of these factors is what made me decide that being a developer is the only career path for myself.

          </p>

          {/* <button onClick={() => setShowSkills(!showSkills)} className="font-bold text-m mt-4 marker:tab-button">
            Technical Skills - Click here to {showSkills ? "hide" : "view"}
          </button> */}





          <a onClick={() => setShowSkills(!showSkills)} class="relative inline-flex items-center justify-center inline-block p-1 px-1 py-2 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group mt-4">
            <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span class="relative text-white">Click here to {showSkills ? "hide" : "view"} skills</span>
          </a>


          {showSkills ? skillsData() : null}




          <br></br>

          <a onClick={() => setShowPortfolio(!showPortfolio)} class="relative inline-flex items-center justify-center inline-block p-1 px-1 py-2 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group mt-4">
            <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span class="absolute bottom-0 right-0 w-40 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span class="relative text-white">Portfolio - Click here to {showPortfolio ? "hide" : "view"}</span>
          </a>



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







export default AboutMe;
