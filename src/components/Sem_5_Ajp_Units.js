import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import postpic from './images/post-1-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import newpic from "./images/thumb-4.png"

function Sem_5_Ajp_Units() {
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
                <span>7 Units</span>
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
                <h3>Advanced Java Programming [CT506A-N]</h3>
                <p>Develop understanding of number systems and Boolean algebra. Understand the functioning of logic gates, their implementation and verification of truth tables. </p>
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
        <img src={postpic} alt=""/>
        <h3>Swing</h3>
    </a> </Link>

    <Link to='/watchvideo'  class="box">  <a >
        <i class="fas fa-play"></i>
        <img src={postpic} alt=""/>
        <h3>JDBC</h3>
    </a> </Link>

    <Link to='/watchvideo'  class="box">  <a >
        <i class="fas fa-play"></i>
        <img src={postpic} alt=""/>
        <h3>Java Networking and J2EE</h3>
    </a> </Link>

    <Link to='/watchvideo'  class="box">  <a >
        <i class="fas fa-play"></i>
        <img src={postpic} alt=""/>
        <h3>Servlets, Event Listeners and Filters</h3>
    </a> </Link>

    <Link to='/watchvideo'  class="box">  <a >
        <i class="fas fa-play"></i>
        <img src={postpic} alt=""/>
        <h3>Java Server Pages and JSTL</h3>
    </a> </Link>

    <Link to='/watchvideo'  class="box">  <a >
        <i class="fas fa-play"></i>
        <img src={postpic} alt=""/>
        <h3>Hibernet 4.0</h3>
    </a> </Link>

    <Link to='/watchvideo'  class="box">  <a >
        <i class="fas fa-play"></i>
        <img src={postpic} alt=""/>
        <h3>Spring MVC</h3>
    </a> </Link>

    </div>

</section>


<Footer/>


</>
);
}

export default Sem_5_Ajp_Units;