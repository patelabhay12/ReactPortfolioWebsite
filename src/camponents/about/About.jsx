import React from 'react';
import "./about.css";
import about from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={about} alt='about-me'></img>
          </div>

        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <articel className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small> 1 Years Working</small>
            </articel>
            <articel className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </articel>

            <articel className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </articel>
          </div>
          <p>I am Abhay Patel 3rd-year student at Noida Institute of Engineering and Technology. I completed my secondray education from R D M S S Mungra Badshahpur  and Senior secondray education from  S I C Mungra Badshahspur Jaunpur. My Strength includes that I'm a Quick Learner and a Hard worker who enhances knowledge about new technologies. My Hobbies are playing Cricket, Listening music and Reading Holy Books.</p>

          <a href="#contact" className='btn bnt-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;