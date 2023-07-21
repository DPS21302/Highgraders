import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import Header from "./header";
import Sidebar from "./sidebar";


const Footer = () =>{
    return(
<>

<footer className="footer">
        &copy; copyright @ 2023 by <span>Study Mate</span> | all rights
        reserved!
      </footer>
</>
    );
};

export default Footer;