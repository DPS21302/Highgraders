import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from "./images/pic-1.jpg";
import thumb from "./images/thumb-1.png";
import Header from "./header";

const Sidebar = () => {
  return (
    <>
      <div className="side-bar">
        <div id="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <div className="profile">
          <img src={profilepic} className="image" alt="" />
          <h3 className="name">Darshit Sojitraaaaaaaaaaaaaaaa</h3>
          <p className="role">Student</p>
          <Link to="/profile">
          
            <a className="btn">view profile</a>
          </Link>
        </div>

        <nav className="navbar">
          <Link to="/">
          
            <a>
              <i className="fas fa-home"></i>
              <span>home</span>
            </a>
          </Link>
          <Link to="/about">
          
            <a>
              <i className="fas fa-question"></i>
              <span>about</span>
            </a>
          </Link>
          <Link to="/courses">
          
            <a>
              <i className="fas fa-graduation-cap"></i>
              <span>courses</span>
            </a>
          </Link>
          <Link to="/teacher">
          
            <a>
              <i className="fas fa-chalkboard-user"></i>
              <span>contributors</span>
            </a>
          </Link>
          <Link to="/contact">
          
            <a>
              <i className="fas fa-headset"></i>
              <span>contact us</span>
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;


