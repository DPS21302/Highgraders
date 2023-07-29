import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

function Register() {
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
      <h3>Register Now</h3>
      <p> &nbsp;&nbsp; Your Name <span>*</span></p>
      <input type="text" name="name" placeholder="Enter your name" required maxlength="50" class="box"/>
      <p> &nbsp;&nbsp; Your Email <span>*</span></p>
      <input type="email" name="email" placeholder="Enter your email" required maxlength="50" class="box"/>
      <p> &nbsp;&nbsp; Your Password <span>*</span></p>
      <input type="password" name="pass" placeholder="Enter your password" required maxlength="20" class="box"/>
      <p> &nbsp;&nbsp; Confirm Password <span>*</span></p>
      <input type="password" name="c_pass" placeholder="Confirm your password" required maxlength="20" class="box"/>
      <p> &nbsp;&nbsp; College <span>*</span></p>
      <select name="university" class="box">
      <option value="" selected="selected" placeholder="-- Select a university --">-- Select a university --</option>
      
  <option value="A. D. Patel Institute of Technology, Vallabh Vidyanagar">A. D. Patel Institute of Technology, Vallabh Vidyanagar</option>
  <option value="Adani Institute of Infrastructure Management, Ahmedabad">Adani Institute of Infrastructure Management, Ahmedabad</option>
  <option value="Ahmedabad University">Ahmedabad University</option>
  <option value="Apollo Institute Of Engineering and Technology, Ahmedabad">Apollo Institute Of Engineering and Technology, Ahmedabad</option>
  <option value="Birla Vishwakarma Mahavidyalaya">Birla Vishwakarma Mahavidyalaya</option>
  <option value="Birla Vishwakarma Mahavidyalaya, Anand">Birla Vishwakarma Mahavidyalaya, Anand</option>
  <option value="C K Pithawala College of Engineering and Technology, Surat">C K Pithawala College of Engineering and Technology, Surat</option>
  <option value="C. U. Shah College of Engineering and Technology, Surendranagar">C. U. Shah College of Engineering and Technology, Surendranagar</option>
  <option value="C. U. Shah University">C. U. Shah University</option>
  <option value="CEPT University">CEPT University</option>
  <option value="Charotar University of Science and Technology">Charotar University of Science and Technology</option>
  <option value="Darshan University, Rajkot">Darshan University, Rajkot</option>
  <option value="Devang Patel Institute of Advance Technology and Research">Devang Patel Institute of Advance Technology and Research</option>
  <option value="Dharamsinh Desai University">Dharamsinh Desai University</option>
  <option value="Dr. Jivraj Mehta Institute of Technology, Anand">Dr. Jivraj Mehta Institute of Technology, Anand</option>
  <option value="G H Patel College Of Engineering & Technology, Vallabh Vidyanagar">G H Patel College Of Engineering & Technology, Vallabh Vidyanagar</option>
  <option value="Gandhinagar Institute Of Technology,GIT">Gandhinagar Institute Of Technology,GIT</option>
  <option value="Gandhinagar University">Gandhinagar University</option>
  <option value="Ganpat University">Ganpat University</option>
  <option value="GLS University">GLS University</option>
  <option value="Government Engineering College, Bharuch">Government Engineering College, Bharuch</option>
  <option value="Government Engineering College, Bhavnagar">Government Engineering College, Bhavnagar</option>
  <option value="Government Engineering College, Bhuj">Government Engineering College, Bhuj</option>
  <option value="Government Engineering College, Dahod">Government Engineering College, Dahod</option>
  <option value="Government Engineering College, Gandhinagar">Government Engineering College, Gandhinagar</option>
  <option value="Government Engineering College, Godhra">Government Engineering College, Godhra</option>
  <option value="Government Engineering College, Modasa">Government Engineering College, Modasa</option>
  <option value="Government Engineering College, Palanpur">Government Engineering College, Palanpur</option>
  <option value="Government Engineering College, Patan">Government Engineering College, Patan</option>
  <option value="Government Engineering College, Rajkot">Government Engineering College, Rajkot</option>
  <option value="Government Engineering College, Valsad">Government Engineering College, Valsad</option>
  <option value="Gujarat Technological University">Gujarat Technological University</option>
  <option value="Hasmukh Goswami College of Engineering, Ahmedabad">Hasmukh Goswami College of Engineering, Ahmedabad</option>
  <option value="Indian Institute of Information Technology, Surat">Indian Institute of Information Technology, Surat</option>
  <option value="Indian Institute of Information Technology, Vadodara">Indian Institute of Information Technology, Vadodara</option>
  <option value="Indian Institute of Technology, Gandhinagar">Indian Institute of Technology, Gandhinagar</option>
  <option value="Indus University">Indus University</option>
  <option value="International Institute of Management and Technical Studies, Ahmedabad">International Institute of Management and Technical Studies, Ahmedabad</option>
  <option value="K.S. School of Business Management, Ahmedabad">K.S. School of Business Management, Ahmedabad</option>
  <option value="Kadi Sarva Vishwavidyalaya	">Kadi Sarva Vishwavidyalaya	</option>
  <option value="Karnavati University, Ahmedabad">Karnavati University, Ahmedabad</option>
  <option value="L. J. Institute of Management Studies, Ahmedabad">L. J. Institute of Management Studies, Ahmedabad</option>
  <option value="L.J. Institute of Engineering & Technology, Ahmedabad">L.J. Institute of Engineering & Technology, Ahmedabad</option>
  <option value="Lalbhai Dalpatbhai College of Engineering, Ahmedabad">Lalbhai Dalpatbhai College of Engineering, Ahmedabad</option>
  <option value="LDRP Institute of Technology and Research, Gandhinagar">LDRP Institute of Technology and Research, Gandhinagar</option>
  <option value="Lukhdhirji Engineering College, Morbi">Lukhdhirji Engineering College, Morbi</option>
  <option value="Maharaja Sayajirao University of Baroda">Maharaja Sayajirao University of Baroda</option>
  <option value="Marwadi University, Rajkot">Marwadi University, Rajkot</option>
  <option value="Narnarayan Shastri Institute of Technology, Ahmedabad">Narnarayan Shastri Institute of Technology, Ahmedabad</option>
  <option value="National Institute of Mass Communication and Journalism - NIMCJ, Ahmedabad">National Institute of Mass Communication and Journalism - NIMCJ, Ahmedabad</option>
  <option value="Nirma University of Science and Technology">Nirma University of Science and Technology</option>
  <option value="P P Savani University">P P Savani University</option>
  <option value="Pandit Deendayal Energy University">Pandit Deendayal Energy University</option>
  <option value="Parul Institute of Engineering and Technology, Vadodara">Parul Institute of Engineering and Technology, Vadodara</option>
  <option value="Parul University">Parul University</option>
  <option value="PDM College of Commerce, Rajkot">PDM College of Commerce, Rajkot</option>
  <option value="Rai University">Rai University</option>
  <option value="Rashtriya Raksha University">Rashtriya Raksha University</option>
  <option value="Sardar Patel University">Sardar Patel University</option>
  <option value="Sardar Vallabhbhai National Institute of Technology, Surat">Sardar Vallabhbhai National Institute of Technology, Surat</option>
  <option value="Sardar Vallabhbhai Patel Institute of Technology, Vasad">Sardar Vallabhbhai Patel Institute of Technology, Vasad</option>
  <option value="Sarvajanik College of Engineering and Technology, Surat">Sarvajanik College of Engineering and Technology, Surat</option>
  <option value="Shantilal Shah Engineering College, Sidsar, Bhavnagar">Shantilal Shah Engineering College, Sidsar, Bhavnagar</option>
  <option value="Shri Labhubhai Trivedi Institute of Engineering & Technology, Rajkot">Shri Labhubhai Trivedi Institute of Engineering & Technology, Rajkot</option>
  <option value="Silver Oak College of Engineering and Technology, Ahmedabad">Silver Oak College of Engineering and Technology, Ahmedabad</option>
  <option value="Silver Oak University">Silver Oak University</option>
  <option value="St. Kabir Institute of Professional Studies, Ahmedabad">St. Kabir Institute of Professional Studies, Ahmedabad</option>
  <option value="St. Xavier's College, Ahmedabad">St. Xavier's College, Ahmedabad</option>
  <option value="Swaminarayan College Of Engineering & Technology">Swaminarayan College Of Engineering & Technology</option>
  <option value="Times Business School, Bodakdev, Ahmedabad">Times Business School, Bodakdev, Ahmedabad</option>
  <option value="U. V. Patel College of Engineering, Mehsana">U. V. Patel College of Engineering, Mehsana</option>
  <option value="Unitedworld School of Business, Ahmedabad">Unitedworld School of Business, Ahmedabad</option>
  <option value="Vishwakarma Government Engineering College, Gandhinagar">Vishwakarma Government Engineering College, Gandhinagar</option>
  <option value="VPMP Polytechnic, Gandhinagar">VPMP Polytechnic, Gandhinagar</option>
  <option value="VSITR Vidush Somany Institute of Technology and Research">VSITR Vidush Somany Institute of Technology and Research</option>
</select>

      <p> &nbsp;&nbsp; Semester <span>*</span></p>
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
      <p> &nbsp;&nbsp; Gender <span>*</span></p>
      <select id="dropdown" name="gender" placeholder="Gender" required maxlength="20" class="box">
      {/* <option value="Gender"></option> */}
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="LGBTQIA2S+">LGBTQIA2S+</option>
      </select>

      <p>&nbsp;&nbsp; Select Profile </p>
      <img
    // src={profileImage ? URL.createObjectURL(profileImage) : profilepic}
    alt="Profile"
    className="profile-pic-preview"
  />
      <input type="file" accept="image/*"  class="box"/>
      <Link to='/otp'> <a  class="btn">Register New</a> </Link>
      <p>&nbsp;&nbsp; Already have an account? </p>
      <Link to='/login'> <a  class="btn">Login</a> </Link> 
   </form>

</section>


<Footer/>
</>
  );
}

export default Register;
