import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Silarani Behera</span>
        </div>
        <div className="featured-name">
          <p>I'm <br/><span className="typedText">Java full Stack Developer</span><span className="typed-cursor typed-cursor--blink">|</span></p>
        </div>
        <div className="featured-text-info">
          <p>Recent MCA graduate with expertise in front-end development (HTML,CSS, JavaScript) and Core java, along with 
strong database skill(SQL).</p>
        </div>
        <div className="featured-text-btn">
          <button className="btn blue-btn">Hire Me</button>
          <button className="btn"><a href="./SRB(468).pdf" target='_blank'>Download CV </a><i className="uil uil-file-alt"></i></button>
        </div>
        <div className="social_icons">
          <div className="icon"><i className="uil uil-instagram"></i></div>
          <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
          <div className="icon"><i className="uil uil-dribbble"></i></div>
          <div className="icon"><i className="uil uil-github-alt"></i></div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src="/SRB1.jpg" alt="avatar" />
        </div>
      </div>
    </section>
  );
};

export default Home;
