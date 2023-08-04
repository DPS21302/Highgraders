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
  useEffect(() => {
    const greeting = ["MERN Developer", "Full-Stack Developer ", "Computer Engineer", "Java Developer"];
    let currentGreetingIndex = 0;
    let currentCharacterIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    let pauseEnd = 0;

    function typeWriterEffect() {
      const greetingElement = document.getElementById("typing");

      if (isPaused && Date.now() > pauseEnd) {
        isPaused = false;
        if (isDeleting) {
          currentGreetingIndex = (currentGreetingIndex + 1) % greeting.length;
          isDeleting = false;
        } else {
          isDeleting = true;
        }
      }

      if (
        !isPaused &&
        !isDeleting &&
        currentCharacterIndex === greeting[currentGreetingIndex].length
      ) {
        isPaused = true;
        pauseEnd = Date.now() + 800;
        return setTimeout(typeWriterEffect, 50);
      }

      if (!isPaused && isDeleting && currentCharacterIndex === 0) {
        isPaused = true;
        pauseEnd = Date.now() + 200;
        return setTimeout(typeWriterEffect, 50);
      }

      const timeout = isDeleting ? 100 : 200;
      greetingElement.innerText = greeting[currentGreetingIndex].substring(
        0,
        currentCharacterIndex
      );
      currentCharacterIndex = isDeleting
        ? currentCharacterIndex - 1
        : currentCharacterIndex + 1;
      setTimeout(typeWriterEffect, timeout);
    }

    // Start the typing effect
    typeWriterEffect();
  }, []);
  return (
    <>
      <Header />
      <Sidebar />

      <h1 className="user-list" id="head">ALL TRUSTED USER LIST</h1>

      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-item-header">
            <img src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg" alt="Profile" className="profile-pic-list" />
            Mayank Yadav
          </div>
          <div className="accordion-item-body">
            <div class="accordion-item-body-content box1 .box-user-list">
              <div class="content">
                <div class="image">
                  <img
                    src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg"
                    alt="Profile Image"
                    className="image-user-list"
                  />
                </div>
                <div class="level">
                  <p>PRO</p>
                </div>
                <div class="text">
                  <p class="name">Mayank Yadav</p>
                  <p class="typing" id="typing"></p>
                  <p class="job_discription">
                  An enthusiastic programmer, who is always willing to learn and enhance both technical and personal skills in all possible ways for mutual benefits.
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
            Darshit Sojitra
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
            Darshit Sojitra
          </div>
          <div className="accordion-item-body">
            <div class="accordion-item-body-content box1 .box-user-list">
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
            Darshit Sojitra
          </div>
          <div className="accordion-item-body">
            <div class="accordion-item-body-content box1 .box-user-list">
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