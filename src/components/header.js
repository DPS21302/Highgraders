import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'


const Header=()=>{
return(
<>
<header className="header">
        <section className="flex">
          <Link to="/">  <a  className="logo">
            Study Mate
          </a></Link>
         

          <form action="search.html" method="post" className="search-form">
            <input
              type="text"
              name="search_box"
              required
              placeholder="search courses..."
              maxlength="100"
            />
            <button type="submit" className="fas fa-search "></button>
          </form>

          <div className="icons">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div id="search-btn" className="fas fa-search"></div>
            <div id="user-btn" className="fas fa-user"></div>
            <div id="toggle-btn" className="fas fa-sun"></div>
          </div>

          <div className="profile">
            <img src={profilepic} className="image" alt="" />
            <h3 className="name">Darshit Sojitra</h3>
            <p className="role">student</p>
            <Link to='/profile'>
            <a  className="btn">
              view profile
            </a>
            </Link>
            <div className="flex-btn">
              <Link to='/login'>
                <a  className="option-btn">
                  login
                </a>
                </Link>
                <Link to='/register'>
                <a className="option-btn">
                  register
                </a>
                </Link>
            </div>
          </div>
        </section>
      </header>

</>
);
};

export default Header;
