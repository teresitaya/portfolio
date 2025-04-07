import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          Hi, my name is <span>Jessica Biogi</span> and I began using WordPress
          when first began. I've spent most of my waking hours for the last ten
          years designing, programming and operating WordPress sites go beyond
          with exclusive designer. Apart from this I love to travel, mentor
          designers, review design portfolios & read books on everything related
          to design. I have also given design talks in various educational
          institutions. So I love creating creative content, and you can find
          most of my works here.
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Jessica Biogi</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">USA</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <p
            className="about-detail-info email"
            onClick="location.href='tel:(+1)2345678899'"
          >
            (+1) 234 567 8899
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick="location.href='mailto:hello@biogi.com'"
          >
            hello@biogi.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">6+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Skype</p>
          <p className="about-detail-info">hello.biogi</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">English</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
