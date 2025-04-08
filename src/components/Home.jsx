import React, { useEffect, useState } from "react";
import ProfileImg from "../assets/images/85.jpeg";
import EmailSvg from "../assets/images/svg/email-svg.svg";
import HomeSvg from "../assets/images/svg/home-svg.svg";
import AboutSvg from "../assets/images/svg/about-svg.svg";
import ResumeSvg from "../assets/images/svg/resume-svg.svg";
import ContactSvg from "../assets/images/svg/contact-svg.svg";
import MediumSvg from "../assets/images/svg/medium-svg.svg";
import MariaMainImg from "../assets/images/3.jpeg";
import CircularImg from "../assets/images/2X1.png";
import FlowerImg from "../assets/images/flower.png";
import BrandLogo1 from "../assets/images/angular.gif";
import BrandLogo2 from "../assets/images/react.svg";
import BrandLogo3 from "../assets/images/nx.svg";
import BrandLogo4 from "../assets/images/typescript.png";
import BrandLogo5 from "../assets/images/js.webp";
import BrandLogo6 from "../assets/images/tailwindcss.svg";
import BrandLogo7 from "../assets/images/css.svg";
import BrandLogo8 from "../assets/images/html5.svg";
import AboutSection from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import $ from "jquery";
import CV from "../assets/pdf/maria_resume.pdf";
import { Link } from "react-router-dom";
const technologies = [
  { src: BrandLogo1, name: 'Angular', category: 'framework' },
   { src: BrandLogo2, name: 'React', category: 'framework' },
  { src: BrandLogo3, name: 'TypeScript', category: 'language' },
 { src: BrandLogo4, name: 'Node.js', category: 'runtime' },
  { src: BrandLogo5, name: 'Nx', category: 'tooling', class: 'js-logo' },
  { src: BrandLogo6, name: 'Tailwind', category: 'styling', class:'tailwind-logo' },
  { src: BrandLogo7, name: 'CSS', category: 'styling', class: 'css-logo' },
  { src: BrandLogo8, name: 'HTML', category: 'language', class: 'html-logo' } 
];

const Home = () => {
  //Text
  const firstTexts = ["Frontend Architect", "Lead Developer"];
  const secondTexts = [
   "Angular Expert", 
   "React Developer",
   "Cloud Native Specialist",
  ];

  const [firstTextIndex, setFirstTextIndex] = useState(0);
  const [secondTextIndex, setSecondTextIndex] = useState(0);

// In Home.jsx
useEffect(() => {
  const interval = setInterval(() => {
    setFirstTextIndex((prevIndex) => (prevIndex + 1) % firstTexts.length);
  }, 2000);
  return () => clearInterval(interval);
}, [firstTexts.length]); // Add firstTexts.length as dependency

useEffect(() => {
  const interval = setInterval(() => {
    setSecondTextIndex((prevIndex) => (prevIndex + 1) % secondTexts.length);
  }, 2000);
  return () => clearInterval(interval);
}, [secondTexts.length]); // Add secondTexts.length as dependency

useEffect(() => {
  const interval = setInterval(() => {
    setFirstTextIndex((prevIndex) => (prevIndex + 1) % firstTexts.length);
    setSecondTextIndex((prevIndex) => (prevIndex + 1) % secondTexts.length);
  }, 2000);
  return () => clearInterval(interval);
}, [firstTexts.length, secondTexts.length]); // Add both dependencies

  // Logo marquee
  useEffect(() => {
    document.querySelectorAll(".logos").forEach(function (logosContainer) {
      const copy = logosContainer.querySelector(".logos-slide").cloneNode(true);
      logosContainer.appendChild(copy);
    });
  }, []);

  // Toggle Btn
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const menuItems = document.querySelectorAll(".menu-list-main li");

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
      menuToggle.classList.toggle("open");
      sideMenu.classList.toggle("show");
    };

    const handleMenuItemClick = (event) => {
      event.preventDefault();
      const linkElement = event.currentTarget.querySelector("a");
      if (linkElement) {
        const targetId = linkElement.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
        menuToggle.classList.remove("open");
        sideMenu.classList.remove("show");
      }
    };

    if (menuToggle && sideMenu && menuItems.length > 0) {
      menuToggle.addEventListener("click", handleMenuToggle);
      menuItems.forEach((item) => {
        item.addEventListener("click", handleMenuItemClick);
      });

      $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
      });

      return () => {
        menuToggle.removeEventListener("click", handleMenuToggle);
        menuItems.forEach((item) => {
          item.removeEventListener("click", handleMenuItemClick);
        });
      };
    }
  }, [menuOpen]);

  const [activeLink, setActiveLink] = useState("");

  const handleClick = (event, id) => {
    event.preventDefault();
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log(`Element with id '${id}' not found`);
    }
  };
  return (
    <>
      <button id="menu-toggle" className="menu-toggle-button">
        <span className="hamburger" id="hamburger-1">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
      </button>
      {/* <!-- ====================================== Side Menu ===================================== --> */}
      <div className="side-menu">
        <div className="profile-img-main">
          <img className="zoom_in" src={ProfileImg} alt="profile-img" />
          <h1 className="fade_up">
            Maria <span>Rosales</span>
          </h1>
          <h2 className="designer fade_up">{firstTexts[firstTextIndex]}</h2>
          <div className="profile-media-icons-main fade_up">
            <Link to="mailto:hello@biogi.com" className="profile-media-icons">
              <img src={EmailSvg} alt="email-svg" />
            </Link>
            <Link to="https://medium.com/@teresitaya" className="profile-media-icons">
              <img src={MediumSvg} alt="medium-svg" />
            </Link>
          </div>
        </div>
        <div className="menu-list-main">
          <ul>
            <li
              className={`active-menu-action ${
                activeLink === "home" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#home"
                onClick={(e) => handleClick(e, "home")}
              >
                <img src={HomeSvg} alt="home-svg" />
                Home
              </a>
            </li>
            <li
              className={`active-menu-action ${
                activeLink === "about" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#about"
                onClick={(e) => handleClick(e, "about")}
              >
                <img src={AboutSvg} alt="home-svg" />
                About
              </a>
            </li>
            <li
              className={`active-menu-action ${
                activeLink === "resume" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#resume"
                onClick={(e) => handleClick(e, "resume")}
              >
                <img src={ResumeSvg} alt="home-svg" />
                Resume
              </a>
            </li>
            <li
              className={`active-menu-action ${
                activeLink === "contact" ? "active" : ""
              }`}
              id="contact-line"
            >
              <a
                className="fade_right"
                href="#contact"
                onClick={(e) => handleClick(e, "contact")}
              >
                <img src={ContactSvg} alt="home-svg" />
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div id="wrap">
            <Link
              to={CV}
              rel="noreferrer"
              target="_blank"
              className="btn-slide"
            >
              <span className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="download-svg"
                    d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="title">Download CV</span>
              <span className="title-hover">Click Here</span>
            </Link>{" "}
          </div>
        </div>
      </div>

      {/* <!-- ====================================== Side Menu End ===================================== --> */}
      <div className="main-containe" data-bs-spy="scroll">
        {/* <!-- ====================================== Section One ===================================== --> */}
        <section className="section-one overflow-hidden" id="home">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <h2 className="jessica-main-text zoom_in">
                Maria <span>Rosales</span>
              </h2>
              <h3 className="back-End-dev designer2">
                {secondTexts[secondTextIndex]}
              </h3>
              <p className="best fade_down">
              Crafting seamless digital experiences through modern Frontend Architecture. </p>
              <div className="section-one-btns-main fade_down">
                <div className="wrapper">
                  <a className="btn-hover" href="https://github.com/teresitaya" target="_blank" rel="noreferrer">
                    View Work
                  </a>
                </div>
                <div className="wrapper">
                  <Link className="btn-hover btn-hover2" href="#contact"
                    onClick={(e) => handleClick(e, "contact")}>
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 position-relative">
              <img className="flower" src={FlowerImg} alt="flower" />
              <img
                className="circular-img"
                src={CircularImg}
                alt="circular-img"
              />
              <img
                className="jessica-main-img zoom_in"
                src={MariaMainImg}
                alt="jessica-main-img"
              />
              <div className="worked-box">
                <p className="worked-more">
                  Contributed over 100+ projects
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====================================== Section Marquee ===================================== --> */}
        <section className="Marquee-main overflow-hidden">
          <h3 className="fade_up">
            Technologies
          </h3>
          <div className="logos logos2">
            <div className="logos-slide">
              <div className="marquee__content">
                {technologies.map((tech, index) => (
                  <div key={index} className="marquee-img-main">
                    <img
                      className={`brand-logos ${tech.class}`}
                      src={tech.src}
                      alt={`${tech.name}-logo`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====================================== Section Marquee End ===================================== --> */}
        {/* <!-- ====================================== Section About ===================================== --> */}
        <AboutSection />
        {/* <!-- ====================================== Section About End ===================================== --> */}
        {/* <!-- ====================================== Section Education Experience ===================================== --> */}
        <Resume />
        {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
        {/* <!-- ====================================== Section Portfolio ===================================== --> */}
        <Contact />
        {/* <!-- ====================================== Section Contact ===================================== --> */}
      </div>
    </>
  );
};
export default Home;
