import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

function Contributor() {
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
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<section class="form-container">

   <form action="" method="post" enctype="multipart/form-data">
      <h3>contribut now</h3>
      {/* <p>Full Name <span>*</span></p>
      <input type="text" name="name"  placeholder="Enter your name" required maxlength="50" class="box"/>

      <p>Email ID <span>*</span></p>
      <input type="email" name="email" placeholder="Enter your email" pattern=".+@gmail\.com"  required maxlength="50" class="box"/>

      <p>College Name <span>*</span></p>
      <input type="text" name="College name" placeholder="Enter college name" required maxlength="50" class="box"/> */}

      <p>Semester <span>*</span></p>
      <select name="sem" id="sem" class="box">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
      </select >
      

      <p>Subject Name <span>*</span></p>
      <input type="text" name="subject name" placeholder="Enter subject name" required maxlength="50" class="box"/>
      

      
      {/* <p>Password <span>*</span></p>
      <input type="password" name="pass" placeholder="enter your password" required maxlength="20" class="box"/>
      <p>Confirm password <span>*</span></p>
      <input type="password" name="c_pass" placeholder="confirm your password" required maxlength="20" class="box"/>
      <p>select profile <span>*</span></p> */}

      <p>Uplode File <span>*</span></p>
      {/* <input type="file" accept="image/*" required class="box"/> */}
      <input type="file" id="files" name="files" multiple required class="box"></input>

      <p>Pdf Description <span>*</span></p>
      {/* <textarea rows="#" cols="#" placeholder="Enter here..." class="box"></textarea> */}
      <textarea class="box" rows="6" placeholder="Send your comments to the author..."></textarea>
      {/* <i class="fa-solid fa-handshake-angle"></i> */}

      
        <input type="submit" value="contribute" name="submit" class="btn"/>




  </form>

</section>


<Footer/>
</>
  );
}

export default Contributor;
