import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import profilepic from "./images/pic-1.jpg";
import thumb from "./images/thumb-1.png";
import aboutpic from "./images/about-img.svg";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

function Userlist() {
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
            <Header />
            <Sidebar />

            <section className="head">
                <img src="../images/final-20.gif" alt="error " />
                <h1>
                    <b>E-Challan Collection System</b>
                </h1>
                <ul>
                    <li>
                        <a
                            href="Home_Page.html"
                            style="background-color: #E1F3FD; text-decoration: none; color:black"
                        >
                            <i className="fa fa-fw fa-home"></i>Home
                        </a>
                    </li>
                    <li>
                        <a href="#" style="background-color: darkblue; color:white">
                            <i className="fa fa-fw fa-exclamation-circle"></i>Queries
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-fw fa-plus"></i>Manage
                        </a>
                        <ul>
                            <li>
                                <a href="newform.html" style="text-decoration: none;">
                                    Insert{" "}
                                </a>
                            </li>
                            <li>
                                <a href="unewform.html" style="text-decoration: none;">
                                    Update
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2>Queries</h2>
                <br />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 001{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b> Incorrect amount charged</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I have been charged incorrect amount that is 2000 more than the
                        actual rulebreak fine. Please refer the attachment and update the
                        amount as soon as possible.
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />

                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 002{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Doubt regarding penalty calculation.</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I had came to know that the actual penalty charges are 30% of amount
                        but in my case you have charged 50% of amount. I've attached the
                        E-bill, please look into it and acknowledge me as soon as possible.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 003{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b> Incorrect integration with E-bill.</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've already paid the E-challan issued to me before due date though
                        you've added it to my E-bill. I've attached my E-Challan Pay-Slip,
                        please look into it and update my E-bill amount.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 004{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Received incorrect E-Challan. </b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've received someone else E-challan fine integrated with my E-Bill
                        as the vehicle no. shown in the bill is not mine. I've provided my
                        RC details in attachments, please refer to it and update it as soon
                        as possible.
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 005{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Inappropriately detained my vehicle</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've already paid the E-bill integrated with the E-challan though
                        RTO-Gujarat has detained my vehicle. Please refer the attachment and
                        please solve it as soon as possible.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 006{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b> Incorrect amount charged</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I have been charged incorrect amount that is 2000 more than the
                        actual rulebreak fine. Please refer the attachment and update the
                        amount as soon as possible.
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />

                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 007{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Doubt regarding penalty calculation.</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I had came to know that the actual penalty charges are 30% of amount
                        but in my case you have charged 50% of amount. I've attached the
                        E-bill, please look into it and acknowledge me as soon as possible.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 008{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b> Incorrect integration with E-bill.</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've already paid the E-challan issued to me before due date though
                        you've added it to my E-bill. I've attached my E-Challan Pay-Slip,
                        please look into it and update my E-bill amount.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 009{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Received incorrect E-Challan. </b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've received someone else E-challan fine integrated with my E-Bill
                        as the vehicle no. shown in the bill is not mine. I've provided my
                        RC details in attachments, please refer to it and update it as soon
                        as possible.
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 010{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Inappropriately detained my vehicle</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've already paid the E-bill integrated with the E-challan though
                        RTO-Gujarat has detained my vehicle. Please refer the attachment and
                        please solve it as soon as possible.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />

                <hr className="hr-line" />

                <div className="head">
                    <img src="" alt="error "></img>
                    <h1>
                        <b>E-Challan Collection System</b>
                    </h1>
                    <ul>
                        <li>
                            <a
                                href=""
                                style="background-color: #E1F3FD; text-decoration: none; color:black"
                            >
                                <i className="fa fa-fw fa-home"></i>Home
                            </a>
                        </li>
                        <li>
                            <a href="#" style="background-color: darkblue; color:white">
                                <i className="fa fa-fw fa-exclamation-circle"></i>Queries
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fa fa-fw fa-plus"></i>Manage
                            </a>
                            <ul>
                                <li>
                                    <a href="" style="text-decoration: none;">
                                        Insert{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="" style="text-decoration: none;">
                                        Update
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <h2>Queries</h2>
                <br />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 001{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b> Incorrect amount charged</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I have been charged incorrect amount that is 2000 more than the
                        actual rulebreak fine. Please refer the attachment and update the
                        amount as soon as possible.
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />

                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 002{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Doubt regarding penalty calculation.</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I had came to know that the actual penalty charges are 30% of amount
                        but in my case you have charged 50% of amount. I've attached the
                        E-bill, please look into it and acknowledge me as soon as possible.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>

                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 003{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b> Incorrect integration with E-bill.</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've already paid the E-challan issued to me before due date though
                        you've added it to my E-bill. I've attached my E-Challan Pay-Slip,
                        please look into it and update my E-bill amount.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>

                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 004{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Received incorrect E-Challan. </b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've received someone else E-challan fine integrated with my E-Bill
                        as the vehicle no. shown in the bill is not mine. I've provided my
                        RC details in attachments, please refer to it and update it as soon
                        as possible.
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>

                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 005{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Inappropriately detained my vehicle</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've already paid the E-bill integrated with the E-challan though
                        RTO-Gujarat has detained my vehicle. Please refer the attachment and
                        please solve it as soon as possible.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>

                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 006{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b> Incorrect amount charged</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I have been charged incorrect amount that is 2000 more than the
                        actual rulebreak fine. Please refer the attachment and update the
                        amount as soon as possible.
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>

                <hr className="hr-line" />

                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 007{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Doubt regarding penalty calculation.</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I had came to know that the actual penalty charges are 30% of amount
                        but in my case you have charged 50% of amount. I've attached the
                        E-bill, please look into it and acknowledge me as soon as possible.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>

                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 008{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b> Incorrect integration with E-bill.</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've already paid the E-challan issued to me before due date though
                        you've added it to my E-bill. I've attached my E-Challan Pay-Slip,
                        please look into it and update my E-bill amount.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>

                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 009{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Received incorrect E-Challan. </b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've received someone else E-challan fine integrated with my E-Bill
                        as the vehicle no. shown in the bill is not mine. I've provided my
                        RC details in attachments, please refer to it and update it as soon
                        as possible.
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>

                <hr className="hr-line" />
                <button className="accordion faq-page">
                    {" "}
                    Q-Id: 010{" "}
                    <p style="margin-top: -30px; margin-left: 200px;">
                        <b>Inappropriately detained my vehicle</b>
                    </p>
                </button>
                <div className="panel">
                    <p>
                        I've already paid the E-bill integrated with the E-challan though
                        RTO-Gujarat has detained my vehicle. Please refer the attachment and
                        please solve it as soon as possible.{" "}
                    </p>
                    <button id="myBtn">View Attachment</button>
                    <br />
                    <br />
                    <textarea placeholder="Type here..."></textarea>
                    <button id="myBtn">Submit</button>
                    <div id="myModal" className="modal">
                        {/* Modal content */}
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Attachments:</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Userlist;
