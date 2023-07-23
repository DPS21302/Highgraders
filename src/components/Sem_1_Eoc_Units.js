import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import postpic from './images/post-1-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import newpic from "./images/thumb-4.png"

function Sem_1_Eoc_Units() {
    useEffect(() => {
        let toggleBtn = document.getElementById("toggle-btn");
        let body = document.body;
        let darkMode = localStorage.getItem("dark-mode");
    
        const enableDarkMode = () => {
          toggleBtn.classList.replace("fa-sun", "fa-moon");
          body.classList.add("dark");
          localStorage.setItem("dark-mode", "enabled");
        };
    
        const disableDarkMode = () => {
          toggleBtn.classList.replace("fa-moon", "fa-sun");
          body.classList.remove("dark");
          localStorage.setItem("dark-mode", "disabled");
        };
    
        if (darkMode === "enabled") {
          enableDarkMode();
        }
    
        toggleBtn.onclick = (e) => {
          darkMode = localStorage.getItem("dark-mode");
          if (darkMode === "disabled") {
            enableDarkMode();
          } else {
            disableDarkMode();
          }
        };
    
        let profile = document.querySelector(".header .flex .profile");
    
        document.querySelector("#user-btn").onclick = () => {
          profile.classList.toggle("active");
          search.classList.remove("active");
        };
    
        let search = document.querySelector(".header .flex .search-form");
    
        document.querySelector("#search-btn").onclick = () => {
          search.classList.toggle("active");
          profile.classList.remove("active");
        };
    
        let sideBar = document.querySelector(".side-bar");
    
        document.querySelector("#menu-btn").onclick = () => {
          sideBar.classList.toggle("active");
          body.classList.toggle("active");
        };
    
        document.querySelector("#close-btn").onclick = () => {
          sideBar.classList.remove("active");
          body.classList.remove("active");
        };
    
        window.onscroll = () => {
          profile.classList.remove("active");
          search.classList.remove("active");
    
          if (window.innerWidth < 1200) {
            sideBar.classList.remove("active");
            body.classList.remove("active");
          }
        };
      }, []);
  return (
    <>

<Header/>

<Sidebar/>

<section class="playlist-details">

   <h1 class="heading">Subject Details</h1>

   <div class="row">

      <div class="column">
         <form action="" method="post" class="save-playlist">
            <button type="submit"><i class="far fa-bookmark"></i> <span>save unitlist</span></button>
         </form>
   
         <div class="thumb">
            <img src={thumb}alt=""/>
            <span>10 Units</span>
         </div>
      </div>
      <div class="column">
         <div class="tutor">
            <img src={profilepic} alt=""/>
            <div>
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
   
         <div class="details">
            <h3>Elements Of Civil Engineering [CC109-N]</h3>
            <p>The motto of the civil engineering is the “protection of the welfare and safety of the public”. Indeed, the term civil in civil engineering refers to the discipline’s involvement in public works, including government buildings, military bases, mass transit systems (i.e., highways, railways, airports, and water ways), water treatment works, waste management, irrigation etc.</p>
       <Link to='/teacherProfile' >   <a href="teacher_profile.html" class="inline-btn">view profile</a> </Link> 
         </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">

   <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={newpic} alt=""/>
         <h3>Introduction and Scope of Civil Engineering</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Surveying</h3>
      </a> </Link>
      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Linear measurements</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Angular Measurements</h3>
      </a> </Link>
      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Elevation measurements</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Modern Tools of Surveying and Mapping</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Construction Materials</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Elements of Building Construction</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Water Resources Development</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Transportation Engineering</h3>
      </a> </Link>

   </div>

</section>


<Footer/>


</>
  );
}

export default Sem_1_Eoc_Units;