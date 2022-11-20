import React from 'react';
import "./about.css";
import about from "../../assets/me-about.jpeg";
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
          <p>My self Abhay Patel. I'm a 3rd-year student at Noida Institute of Engineering and Technology. I did My schooling at S I C Mungra Badshahspur Jaunpur. My Strength is a Quick Learner, and a Hard worker who enhances knowledge about new technologies. My Hobbies are playing Cricket, Listening to songs and Reading Holy Books.</p>

          <a href="#contact" className='btn bnt-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;