import React from 'react';
import "./secrvices.css"
import { AiOutlineCheck } from 'react-icons/ai';

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='services'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Gathering and evaluating user requirements, in collaboration with product managers and engineers</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Illustrating design ideas using storyboards, process flows and sitemaps</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Esigning graphic user interface elements, like menus, tabs and widgets etc.</p>
            </li> 
            {/* <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>

        {/* end of UI/UX */}

        <article className='services'>
          <div className="service_head">
            <h3>MERN STACK DEVELOPER</h3>
          </div>
          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Work on back-end & front-end development of core scripts using NodeJS/ MongoDB/React.js/Angular/Express /Redux.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Write reusable, easy to maintain, versioned code using DRY principles</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Familiarity with Server-Oriented Architecture and RESTful Web Services</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Good exposure in creating dynamic web pages</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Knowledge of data structures and algorithms</p>
            </li>
  
          </ul>
        </article>


        {/* end of web Development */}

        <article className='services'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
};

export default Services;