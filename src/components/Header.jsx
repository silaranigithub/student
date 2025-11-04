import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Sila</p>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">Home</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">About</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link">Projects</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#contact" className="nav-link">Contact</a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn"><a href="./SRB(468).pdf" target='_blank'>Download CV </a><i className="uil uil-file-alt"></i></button>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars"></i>
      </div>
    </nav>
  );
};

export default Header;
