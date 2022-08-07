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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>

          <a href="#contact" className='btn bnt-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;