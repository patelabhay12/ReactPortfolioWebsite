import React from 'react';
import "./contact.css";
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';




const allData = [
  {
    key: 1,
    icon: <HiOutlineMailOpen />,
    name: 'Email',

    para: 'abhaypatel6794@gamil.com',
    href: 'mailto:abhaypatel794@gmail.com',
    anker: 'Send a message'
  },
  {
    key: 2,
    icon: <RiMessengerLine />,
    name: 'Messenger',
    para: 'Abhay Patel',
    href: 'https://www.facebook.com/profile.php?id=100066389746638',
    anker: 'Send a message'
  },
  {
    key: 3,
    icon: <BsWhatsapp />,
    name: 'WhatsApp',
    para: '+917525858518',
    href: 'https://api.whatsapp.com/send?phone+7525858518',
    anker: 'Send a message'
  }

]



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_54iakxk', 'template_70e9718', form.current, '-Ht5bRwLoUwOpfPTj')
      e.target.reset();
    };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          {
            allData.map(({ key, icon, name, para, href, anker }) => {
              return (
                <article className='contact_option' id={key}>
                  <h2 className='contact_icons'>{icon}</h2>
                  <h4>{name}</h4>
                  <p>{para}</p>
                  <a href={href} target='_blank'>{anker}</a>
                </article>
              )
            })
          }
        </div>

        {/* End of coontact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email"  name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
};

export default Contact;
