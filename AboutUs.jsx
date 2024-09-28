import React from "react";
import "./AboutUs.css";
import image from './images/team.jpg';


const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="header">
        <h1>ABOUT <section className="us">US</section></h1>
      </header>

      <div className="content">
        <p>
          Welcome to <b>Park Snap</b>, the vehicles parking managemen system for "LSEG".
          Developed by students from the University of Moratuwa IT Faculty, Park
          Snap is designed to make parking at LSEG easy and efficient.
        
        
          This project combines the innovative spirit of our students with the
          expertise of LSEG to create a smart, user-friendly parking solution.
          We're proud to offer a system that simplifies parking management and
          enhances the overall experience for everyone.
        </p>
        <div className="team-section">
        <button className="team-button">Meet our Team- Tech Tuners</button>
        <img
          className="team-photo"
          src={image}
          alt="Team"
          
        /> </div>
      </div>

      
    </div>
  );
};

export default AboutUs;
