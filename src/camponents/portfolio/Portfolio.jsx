import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


// const Data = [
//   {
//     h:"LIdbcjdj"
//   }
// ]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Real Time Chat Application</h3>
          <div className="portfolio_btn">
            <a href="https://github.com/patelabhay12/realTimeChatApp" target='blank' className='btn'>Github</a>
            <a href="https://github.com/patelabhay12/realTimeChatApp"  className='btn btn-primary' target='_blank'>Live (NA)</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="portfolio_btn">
            <a href="https://github.com/patelabhay12/ReactPortfolioWebsite" target="blank" className='btn'>Github</a>
            <a href="https://patelabhay12.github.io/ReactPortfolioWebsite/"  className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Nursery Website </h3>
          <div className="portfolio_btn">
            <a href="https://github.com/patelabhay12/Nursery_Website" target="blank" className='btn'>Github</a>
            <a href="https://github.com/patelabhay12/Nursery_Website"  className='btn btn-primary' target='_blank'>Live ( NA ) </a>

          </div>

        </article>


        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Tic-Tac-Toe Game</h3>
          <div className="portfolio_btn">
            <a href="https://github.com/patelabhay12/Tic-Tac-Toe-Game-Using-HTML-CSS-and-Java-Script"  target="blank" className='btn'>Github</a>
            <a href="https://github.com/patelabhay12/Tic-Tac-Toe-Game-Using-HTML-CSS-and-Java-Script"  className='btn btn-primary' target='_blank'>Live ( NA )</a>

          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Url Shortener</h3>
          <div className="portfolio_btn">
            <a href="https://github.com/patelabhay12/URL-SHORTENER" target="blank" className='btn'>Github</a>
            <a href="https://github.com/patelabhay12/URL-SHORTENER"  className='btn btn-primary' target='_blank'>Live ( NA )</a>

          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Hotel Booking Website</h3>
          <div className="portfolio_btn">
            <a href="https://github.com/patelabhay12/ReactPortfolioWebsite" target="blank" className='btn'>Github</a>
            <a href="https://github.com/patelabhay12/ReactPortfolioWebsite"  className='btn btn-primary' target='_blank'>Live ( NA ) </a>

          </div>
        </article>
      </div>
    </section>
  )
};

export default Portfolio;