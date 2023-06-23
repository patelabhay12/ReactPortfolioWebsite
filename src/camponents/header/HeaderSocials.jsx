import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/abhay-patel-8b671921a/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
        <a href="https://github.com/patelabhay12" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
    </div>
  )
}

export default HeaderSocials;