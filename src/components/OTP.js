import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

function OTP() {
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

<section class="form-container">

   <form action="" method="post" enctype="multipart/form-data">
      <h3>OTP Verification</h3>
      <p>Enter OTP:<span>*</span></p>


      {/* <input type="text" name="OTP" placeholder="" required   class="box"/> */}
      <input type="Numeric" name="OTP" pattern="^[0-9\s]{6}$" min="0" max="9" maxlength="6"   required class="box"/>


      {/* <input type="submit" value="Submit" name="submit" class="btn"/> */}

      
      <Link to='/login'> <a  class="btn">Submit</a> </Link> 
      <p>Didn't get OTP? </p>
      <Link to='/resend'> <a  class="btn">Resend OTP</a> </Link> 
   </form>

</section>




<Footer/></>
  );
}

export default OTP;
