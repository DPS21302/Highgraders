import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import profilepic from "./images/pic-1.jpg";
import thumb from "./images/thumb-1.png";
import aboutpic from "./images/about-img.svg";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handledarkmode from "./Darkmode";

const Demo = () => {
  useEffect(() => {
    handledarkmode();
  }, []);
  useEffect(() => {
    const accordionItemHeaders = document.querySelectorAll(
      ".accordion-item-header"
    );

    accordionItemHeaders.forEach((accordionItemHeader) => {
      accordionItemHeader.addEventListener("click", (event) => {
        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

        const currentlyActiveAccordionItemHeader = document.querySelector(
          ".accordion-item-header.active"
        );
        if (
          currentlyActiveAccordionItemHeader &&
          currentlyActiveAccordionItemHeader !== accordionItemHeader
        ) {
          currentlyActiveAccordionItemHeader.classList.toggle("active");
          currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
          accordionItemBody.style.maxHeight =
            accordionItemBody.scrollHeight + "px";
        } else {
          accordionItemBody.style.maxHeight = 0;
        }
      });
    });
  }, []);
  return (
    <>
      <Header />
      <Sidebar />

      <h1 id="head">ALL TRUSTED USER LIST</h1>

      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-item-header">
            <img src={profilepic} alt="Profile" className="profile-pic-list" />
            &nbsp;Darshit Sojitra
          </div>
          <div className="accordion-item-body">
            <div class="accordion-item-body-content box1 box">
              <div class="content">
                <div class="image">
                  <img
                    src="https://i.postimg.cc/bryMmCQB/profile-image.jpg"
                    alt="Profile Image"
                  />
                </div>
                <div class="level">
                  <p>PRO</p>
                </div>
                <div class="text">
                  <p class="name">Ethan Rivers</p>
                  <p class="job_title">UI / UX Designer</p>
                  <p class="job_discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam atque, ipsam a amet laboriosam eligendi.
                  </p>
                </div>
                <div class="icons">
                  <button>
                    <ion-icon name="logo-dribbble"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-behance"></ion-icon>
                  </button>
                </div>
                <div class="button">
                  <div>
                    <button class="message" type="button">
                      Message
                    </button>
                  </div>
                  <div>
                    <button class="connect" type="button">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-item-header">
            <img src={profilepic} alt="Profile" className="profile-pic-list" />
            &nbsp;Mayank Yadav
          </div>
          <div className="accordion-item-body">
            <div class="accordion-item-body-content box1 box">
              <div class="content">
                <div class="image">
                  <img
                    src="https://i.postimg.cc/bryMmCQB/profile-image.jpg"
                    alt="Profile Image"
                  />
                </div>
                <div class="level">
                  <p>PRO</p>
                </div>
                <div class="text">
                  <p class="name">Ethan Rivers</p>
                  <p class="job_title">UI / UX Designer</p>
                  <p class="job_discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam atque, ipsam a amet laboriosam eligendi.
                  </p>
                </div>
                <div class="icons">
                  <button>
                    <ion-icon name="logo-dribbble"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-behance"></ion-icon>
                  </button>
                </div>
                <div class="button">
                  <div>
                    <button class="message" type="button">
                      Message
                    </button>
                  </div>
                  <div>
                    <button class="connect" type="button">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-item-header">
            <img src={profilepic} alt="Profile" className="profile-pic-list" />
            &nbsp;Divya KauRANI
          </div>
          <div className="accordion-item-body">
            <div class="accordion-item-body-content box1 box">
              <div class="content">
                <div class="image">
                  <img
                    src="https://i.postimg.cc/bryMmCQB/profile-image.jpg"
                    alt="Profile Image"
                  />
                </div>
                <div class="level">
                  <p>PRO</p>
                </div>
                <div class="text">
                  <p class="name">Ethan Rivers</p>
                  <p class="job_title">UI / UX Designer</p>
                  <p class="job_discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam atque, ipsam a amet laboriosam eligendi.
                  </p>
                </div>
                <div class="icons">
                  <button>
                    <ion-icon name="logo-dribbble"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-behance"></ion-icon>
                  </button>
                </div>
                <div class="button">
                  <div>
                    <button class="message" type="button">
                      Message
                    </button>
                  </div>
                  <div>
                    <button class="connect" type="button">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-item-header">
            <img src={profilepic} alt="Profile" className="profile-pic-list" />
            &nbsp;Gaurav Tiwari
          </div>
          <div className="accordion-item-body">
            <div class="accordion-item-body-content box1 box">
              <div class="content">
                <div class="image">
                  <img
                    src="https://i.postimg.cc/bryMmCQB/profile-image.jpg"
                    alt="Profile Image"
                  />
                </div>
                <div class="level">
                  <p>PRO</p>
                </div>
                <div class="text">
                  <p class="name">Ethan Rivers</p>
                  <p class="job_title">UI / UX Designer</p>
                  <p class="job_discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam atque, ipsam a amet laboriosam eligendi.
                  </p>
                </div>
                <div class="icons">
                  <button>
                    <ion-icon name="logo-dribbble"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-behance"></ion-icon>
                  </button>
                </div>
                <div class="button">
                  <div>
                    <button class="message" type="button">
                      Message
                    </button>
                  </div>
                  <div>
                    <button class="connect" type="button">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-item-header">
            <img src={profilepic} alt="Profile" className="profile-pic-list" />
            &nbsp;MIT Patel
          </div>
          <div className="accordion-item-body">
            <div class="accordion-item-body-content box1 box">
              <div class="content">
                <div class="image">
                  <img
                    src="https://i.postimg.cc/bryMmCQB/profile-image.jpg"
                    alt="Profile Image"
                  />
                </div>
                <div class="level">
                  <p>PRO</p>
                </div>
                <div class="text">
                  <p class="name">Ethan Rivers</p>
                  <p class="job_title">UI / UX Designer</p>
                  <p class="job_discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam atque, ipsam a amet laboriosam eligendi.
                  </p>
                </div>
                <div class="icons">
                  <button>
                    <ion-icon name="logo-dribbble"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="logo-behance"></ion-icon>
                  </button>
                </div>
                <div class="button">
                  <div>
                    <button class="message" type="button">
                      Message
                    </button>
                  </div>
                  <div>
                    <button class="connect" type="button">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Demo;