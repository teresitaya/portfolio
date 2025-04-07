import React, { useEffect, useRef, useMemo } from "react";
import { Tooltip } from 'react-tooltip';
import AngularImg from "../assets/images/angular.png";
import NxImg from "../assets/images/nx-logo.svg";
import ReactImg from "../assets/images/react.png";
import FigmaImg from "../assets/images/figma-img.png";
import TypeScriptImg from "../assets/images/typescript.svg";
const Resume = () => {
  const colors = useMemo(() => [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ], []);
  const progressRef = useRef(null);
  const hasAnimated = useRef(false); // Track if the animation has already run

  useEffect(() => {
    const progressSection = progressRef.current;
    const items = progressSection.querySelectorAll(".progress-item");
    const observerOptions = { threshold: 0.1 };

    function handleIntersection(entries, observer) {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        items.forEach((item, index) => {
          let num = parseInt(item.dataset.num);
          let count = 0;
          let color = colors[index % colors.length];
          let interval = setInterval(() => {
            if (count === num) {
              clearInterval(interval);
            } else {
              count++;
              item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
              item.setAttribute("data-value", `${count}%`);
              item.innerHTML = `${count}%`;
            }
          }, 15);
        });
        observer.unobserve(progressSection);
        hasAnimated.current = true; // Mark that the animation has run
      }
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);

    return () => observer.disconnect();
  }, [colors]);

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6 mb-4">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Experience.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Frontend Architect - Lead</p>
                <p className="cursus university">Acium Inc. | Miami, FL / 10/2023 - Present</p>
                <p className="cursus">
                  • Architected frontend for Enterprise Browser Management platform using Angular, Nx, TypeScript, PrimeNG and Tailwind CSS
                  • Implemented micro frontend architecture with NX and Git submodules
                  • Led frontend team to successful MVP delivery and feature development
                  • Migrated from Angular 16 to 18 and Material to PrimeNG
                  • Established testing standards with Jest and documentation practices
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Frontend Architect - Lead</p>
                <p className="cursus university">itopia Inc. | Miami, FL / 10/2018 - 09/2023</p>
                <p className="cursus">
                  • Architected EdTech cloud-native SaaS using Angular and TypeScript
                  • Developed PWA with offline capabilities using Angular PWA
                  • Implemented browser-based HTML5 client with webRTC for desktop streaming
                  • Led frontend team and established testing standards with Jasmine/Karma
                  • Designed DaaS orchestration platform for GCP using Angular and Google APIs
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Senior Fullstack Developer</p>
                <p className="cursus university">Reserva Inc | Havana / 02/2018 - 09/2018</p>
                <p className="cursus">
                  • Developed features for mobile and desktop platforms using Odoo Framework
                  • Created chat module using Python, JavaScript, HTML, and CSS
                  • Maintained Node.js applications with latest versions and security patches
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Fullstack Developer</p>
                <p className="cursus university">UCI | Havana / 10/2012 - 01/2018</p>
                <p className="cursus">
                  • Redesigned and developed SIPAC workflow approval web application
                  • Project adopted by several provinces and Central State Administration
                  • Won 2016 CITMA Provincial Award
                  • Technologies: PHP, PostgreSQL, JavaScript, CSS, HTML
                </p>
              </div>
            </div>
          </div> 
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Education.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Bachelor in Computer Science</p>
                <p className="cursus university">
                  University of Informatics Science / 2007 - 2012
                </p>
                <p className="cursus">
                  Comprehensive study of software engineering, algorithms, and advanced programming concepts. Specialized in web technologies and distributed systems. Graduated with honors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      <section className="coding-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Overall Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div id="progress" ref={progressRef}>
          {/* Frontend Skills */}
          <div data-num="95" className="progress-item fade_up" data-tooltip-id="frontend" data-tooltip-content="Frontend Frameworks">
            Frontend Frameworks
          </div>
          <div data-num="94" className="progress-item fade_up" data-tooltip-id="ui" data-tooltip-content="UI Libraries">
            UI Libraries
          </div>
          <div data-num="93" className="progress-item fade_up" data-tooltip-id="core" data-tooltip-content="Core Web Technologies">
            Core Web Technologies
          </div>
          
          {/* Architecture Skills */}
          <div data-num="96" className="progress-item fade_up" data-tooltip-id="architecture" data-tooltip-content="Architecture & DevOps">
            Architecture & DevOps
          </div>
          
          {/* Testing Skills */}
          <div data-num="84" className="progress-item fade_up" data-tooltip-id="testing" data-tooltip-content="Testing">
            Testing
          </div>
          
          {/* Backend Skills */}
          <div data-num="80" className="progress-item fade_up" data-tooltip-id="backend" data-tooltip-content="Backend Technologies">
            Backend Technologies
          </div>
          
          {/* Tooltips */}
          <Tooltip id="frontend" />
          <Tooltip id="ui" />
          <Tooltip id="core" />
          <Tooltip id="architecture" />
          <Tooltip id="testing" />
          <Tooltip id="backend" />
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
     <section className="design-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text design-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div className="design-skill-sub-section">
          <div className="design-skills-img-main flip_up" data-tooltip-id="angular" data-tooltip-content="Primary framework with extensive experience across all versions">
            <img src={AngularImg} alt="figma-img" className="skill-img" />
            <div className="skill-counter-main">
              <p>96%</p>
              <p>Angular</p>
            </div>
          </div>
         <div className="design-skills-img-main photoshop flip_up" data-tooltip-id="nx" data-tooltip-content="Architectural expertise with monorepos">
            <img src={NxImg} alt="nx-img" className="skill-img" />
            <div className="skill-counter-main photoshop-text">
              <p>91%</p>
              <p>Nx</p>
            </div>
          </div>
          <div className="design-skills-img-main adobe-xd flip_up" data-tooltip-id="react" data-tooltip-content="Strong expertise in modern React ecosystem">
            <img src={ReactImg} alt="react-img" className="skill-img" />
            <div className="skill-counter-main adobe-xd-text">
              <p>88%</p>
              <p>React</p>
            </div>
          </div>
          

         <div className="design-skills-img-main sketch flip_up" data-tooltip-id="typescript" data-tooltip-content="Primary language for frontend/backend development">
            <img src={TypeScriptImg} alt="sktech-img" className="skill-img" />
            <div className="skill-counter-main sketch-text">
              <p>95%</p>
              <p>TypeScript</p>
            </div>
          </div>
          <div className="design-skills-img-main invision flip_up" data-tooltip-id="invision" data-tooltip-content="Main Design Tool">
            <img src={FigmaImg} alt="figma-img" className="skill-img" />
            <div className="skill-counter-main invision-text">
              <p>89%</p>
              <p>Figma</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
    </>
  );
};
export default Resume;
