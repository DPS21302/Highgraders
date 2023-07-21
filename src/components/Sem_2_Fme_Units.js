import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import postpic from './images/post-1-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import newpic from "./images/thumb-4.png"

function Sem_2_Fme_Units() {
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
            <span>15 Units</span>
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
            <h3>Fundamental Of Mechanical Engineering [CC104-N]</h3>
            <p>To present a problem oriented introductory knowledge of Fundamentals of Mechanical Engineering. To address the underlying concepts and methods behind mechanical engineering. </p>
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
         <h3>Introduction</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={newpic} alt=""/>
         <h3>Properties of Gases</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Heat Engines</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={newpic} alt=""/>
         <h3>Properties of Steam</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Steam and Steam Generator</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Refrigeration and Air conditioning</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>I.C. Engine</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Air Compressor</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Speed Control</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Fuels and Combustion</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Power Transmission Methods and Devices</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Pump</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Engineering Materials</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Mechanical Working of Metals and Press Operations</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>Heat Transfer & Turbines</h3>
      </a> </Link>



   </div>

</section>


<Footer/>


</>
  );
}

export default Sem_2_Fme_Units;