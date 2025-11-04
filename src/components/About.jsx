import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>I am well-versed in HTML, CSS and JavaScript, and other cutting edge frameworks and libraries, which allows me to implement interactive features. Additionally, I have experience working with content management systems (CMS) like WordPress.</p>
            <div className="about-btn">
              <button className="btn"><a href="./SRB(468).pdf" target='_blank'>Download CV </a><i className="uil uil-import"></i></button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>Core-Java</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
