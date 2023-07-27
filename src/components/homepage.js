import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'

import thumb from './images/Sem-1/FOP.png'
import s11 from './images/Sem-1/FOP.png'
import s12 from './images/Sem-1/Maths-1.png'
import s13 from './images/Sem-1/EOC.png'
import s14 from './images/Sem-1/EG.png'
import s15 from './images/Sem-1/EP.png'
import s16 from './images/Sem-1/ES.png'

import s21 from './images/Sem-2/OOPC.png'
import s22 from './images/Sem-2/Maths-2.png'
import s23 from './images/Sem-2/BEEE.png'
import s24 from './images/Sem-2/FME.png'
import s25 from './images/Sem-2/BCPS.png'
import s26 from './images/Sem-2/WORKSHOP.png'
import s27 from './images/Sem-2/IICT.png'

import s31 from './images/Sem-3/DSA.png'
import s32 from './images/Sem-3/Maths-3.png'
import s33 from './images/Sem-3/DBMS.png'
import s34 from './images/Sem-3/DE.png'
import s35 from './images/Sem-3/ITW.png'







import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import TextSphere from "./textsphere";
import $ from "jquery";



const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
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
  // Read the active tab index from localStorage on page load
  useEffect(() => {
    const storedActiveTab = localStorage.getItem("activeTab");
    if (storedActiveTab !== null) {
      setActiveTab(parseInt(storedActiveTab, 10));
    }
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    // Save the active tab index to localStorage when a tab is clicked
    localStorage.setItem("activeTab", index);
  };

  // Define the content for each semester
  const tabContents = [
    // Content for Semester 1 (Tab 0)===========================================================================================
    (
      <ul className="tab-content">
        <li class="active">
            <h1 className="heading">Semester 1</h1>
            <div className="box-container">
              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s11} alt="/" />
                  <span>7 Units</span>
                </div>
                <h3 className="title">Fundamental Of Programming</h3>
                <Link to="/sem_1_fop_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s12} alt="" />
                  <span>7 Units</span>
                </div>
                <h3 className="title">Engineering Mathematics – 1</h3>
                <Link to="/sem_1_maths_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s13} alt="" />
                  <span>10 Units</span>
                </div>
                <h3 className="title">Elements Of Civil Engineering</h3>
                <Link to="/sem_1_eoc_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s14} alt="" />
                  <span>12 Units</span>
                </div>
                <h3 className="title">Engineering Graphics</h3>
                <Link to="/sem_1_eg_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s15} alt="" />
                  <span>10 Units</span>
                </div>
                <h3 className="title">Engineering Physics</h3>
                <Link to="/sem_1_ep_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s16} alt="" />
                  <span>5 Units</span>
                </div>
                <h3 className="title">Enviromental Science</h3>
                <Link to="/sem_1_es_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>
            </div>
          </li>
      </ul>
    ),
    // Content for Semester 2 (Tab 1)===========================================================================================
    (
      <ul className="tab-content">
         <li>
            <h1 className="heading">Semester 2</h1>
            <div className="box-container">
              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s21} alt="/" />
                  <span>10 Units</span>
                </div>
                <h3 className="title">
                  Object Oriented Programming Using 'C++'
                </h3>
                <Link to="/sem_2_oopc_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s22} alt="" />
                  <span>7 Units</span>
                </div>
                <h3 className="title">Engineering Mathematics – 2</h3>
                <Link to="/sem_2_maths_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s23} alt="" />
                  <span>8 Units</span>
                </div>
                <h3 className="title">
                  Basic Electrical and Electronics Engineering
                </h3>
                <Link to="/sem_2_beee_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s24} alt="" />
                  <span>15 Units</span>
                </div>
                <h3 className="title">Fundamental Of Mechanical Engineering</h3>
                <Link to="/sem_2_fme_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s25} alt="" />
                  <span>13 Units</span>
                </div>
                <h3 className="title">
                  Business communication and presentation skills
                </h3>
                <Link to="/sem_2_bcps_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s26} alt="" />
                  <span># Units</span>
                </div>
                <h3 className="title">Workshop [Only Labs]</h3>
                <Link to="/sem_2_workshop_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s27} alt="" />
                  <span># Units</span>
                </div>
                <h3 className="title">
                  Introduction To Information & Communication Technology
                </h3>
                <Link to="/playlist">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>
            </div>
          </li>
      </ul>
    ),
    // Content for Semester 3 (Tab 2)===========================================================================================
    (
      <ul className="tab-content">
        <li>
            <h1 className="heading">Semester 3</h1>
            <div className="box-container">
              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s31} alt="/" />
                  <span>6 Units</span>
                </div>
                <h3 className="title">Data Structures & Algorithms</h3>
                <Link to="/sem_3_dsa_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s32} alt="" />
                  <span>5 Units</span>
                </div>
                <h3 className="title">Discrete Mathematics - 3</h3>
                <Link to="/sem_3_maths_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s33} alt="" />
                  <span>10 Units</span>
                </div>
                <h3 className="title">Database Management Systems</h3>
                <Link to="/sem_3_dbms_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s34} alt="" />
                  <span>7 Units</span>
                </div>
                <h3 className="title">Digital Electronics</h3>
                <Link to="/sem_3_de_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={s35} alt="" />
                  <span>7 Units</span>
                </div>
                <h3 className="title">IT Workshop</h3>
                <Link to="/sem_3_itw_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>
            </div>
          </li>
      </ul>
    ),
    // Content for Semester 4 (Tab 3)===========================================================================================
    (
      <ul className="tab-content">
        <li>
            <h1 className="heading">Semester 4</h1>
            <div className="box-container">
              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={thumb} alt="/" />
                  <span>8 Units</span>
                </div>
                <h3 className="title">
                  Object Oriented Programming Using Java
                </h3>
                <Link to="/sem_4_oopj_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={thumb} alt="" />
                  <span>7 Units</span>
                </div>
                <h3 className="title">
                  Probability, Statistics and Numerical Methods
                </h3>
                <Link to="/sem_4_psnm_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={thumb} alt="" />
                  <span>6 Units</span>
                </div>
                <h3 className="title">Operating Systems</h3>
                <Link to="/sem_4_os_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={thumb} alt="" />
                  <span>6 Units</span>
                </div>
                <h3 className="title">Computer Organization & Architecture</h3>
                <Link to="/sem_4_coa_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={thumb} alt="" />
                  <span>5 Units</span>
                </div>
                <h3 className="title">Principles of Management</h3>
                <Link to="/sem_4_pom_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>
            </div>
          </li>
      </ul>
    ),
    // Content for Semester 5 (Tab 4)===========================================================================================
    (
      <ul className="tab-content">
        <li>
            <h1 className="heading">Semester 5</h1>
            <div className="box-container">
              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={thumb} alt="/" />
                  <span>7 Units</span>
                </div>
                <h3 className="title">Advanced Java Programming</h3>
                <Link to="/sem_5_ajp_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={thumb} alt="" />
                  <span>8 Units</span>
                </div>
                <h3 className="title">Design & Analysis of Algorithms</h3>
                <Link to="/sem_5_daa_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={thumb} alt="" />
                  <span>10 Units</span>
                </div>
                <h3 className="title">Software Engineering</h3>
                <Link to="/sem_5_se_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={thumb} alt="" />
                  <span>8 Units</span>
                </div>
                <h3 className="title">Theory of Computation</h3>
                <Link to="/sem_5_toc_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={thumb} alt="" />
                  <span>7 Units</span>
                </div>
                <h3 className="title">Computer Networks</h3>
                <Link to="/sem_5_cn_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>

              <div className="box">
                <div className="tutor">
                  <img src={profilepic} alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src={thumb} alt="" />
                  <span>7 Units</span>
                </div>
                <h3 className="title">
                  Microprocessor Architecture and Programming
                </h3>
                <Link to="/sem_5_map_units">
                  {" "}
                  <a class="inline-btn">View Units</a>{" "}
                </Link>
              </div>
            </div>
          </li>
      </ul>
    ),
  ];

  return (
    <>
      <Header />

<Sidebar />

<section className="home-grid">
  <TextSphere />
</section>

      <section className="courses">
        <ul id="tabs">
          <li
            className={activeTab === 0 ? "active" : ""}
            onClick={() => handleTabClick(0)}
          >
            <h3>Sem 1</h3>
          </li>
          <li
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            <h3>Sem 2</h3>
          </li>
          <li
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            <h3>Sem 3</h3>
          </li>
          <li
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            <h3>Sem 4</h3>
          </li>
          <li
            className={activeTab === 4 ? "active" : ""}
            onClick={() => handleTabClick(4)}
          >
            <h3>Sem 5</h3>
          </li>
        </ul>

        {/* Render the content based on the active tab */}
        {tabContents[activeTab]}
      </section>

      <Footer />
    </>
  );
};

export default Home;
