 import React from 'react';
 import Header from "./camponents/header/Header";
 import Nav from "./camponents/nav/Nav";
 import About from "./camponents/about/About";
 import Experience from "./camponents/experience/Experience";
 import Services from "./camponents/services/Services";
 import Portfolio from "./camponents/portfolio/Portfolio";
 import Testimonial from "./camponents/testimonials/Testimonial";
 import Contact from "./camponents/contact/Contact";
 import Footer from "./camponents/footer/Footer";
 
 const App = () => {
   return (
    <>
    <Header/>
    <Nav/>
    <About />
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
   )
 }
 
 export default App;  