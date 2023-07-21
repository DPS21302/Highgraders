import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import aboutpic from './images/about-img.svg'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

function TeacherProfile() {
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

<section class="teacher-profile">

   <h1 class="heading">profile details</h1>

   <div class="details">
      <div class="tutor">
         <img src={profilepic} alt=""/>
         <h3>john deo</h3>
         <span>developer</span>
      </div>
      <div class="flex">
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <p>total likes : <span>1208</span></p>
         <p>total comments : <span>52</span></p>
      </div>
   </div>

</section>

<section class="courses">

   <h1 class="heading">our courses</h1>

   <div class="box-container">

      <div class="box">
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete HTML tutorial</h3>
         <Link to='/playlist'>  <a href="playlist.html" class="inline-btn">view playlist</a> </Link>  
      </div>

      <div class="box">
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete CSS tutorial</h3>
         <Link to='/playlist'>  <a href="playlist.html" class="inline-btn">view playlist</a> </Link>  
      </div>

      <div class="box">
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete javascript tutorial</h3>
         <Link to='/playlist'>  <a href="playlist.html" class="inline-btn">view playlist</a> </Link>  
      </div>

      <div class="box">
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete Boostrap tutorial</h3>
     <Link to='/playlist'>  <a href="playlist.html" class="inline-btn">view playlist</a> </Link>  
      </div>

   </div>

</section>


<Footer/>


</>
  );
}

export default TeacherProfile;
