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

        {/* end of UI/UX */}

        <article className='services'>
          <div className="service_head">
            <h3>Web Development</h3>
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
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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