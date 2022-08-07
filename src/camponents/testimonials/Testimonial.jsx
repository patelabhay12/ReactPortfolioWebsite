import React from 'react';
import "./testimonial.css";
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const allData = [
  {
    key: 1,
    img: AVT1,
    name: 'XYZ Patel',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque ea laudantium, porro animi iure esse hic commodi quae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nihil!'

  },
  {
    key: 2,
    img: AVT2,
    name: 'ABD Patel',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque ea laudantium, porro animi iure esse hic commodi quae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nihil!'

  },
  {
    key: 3,
    img: AVT3,
    name: 'PQR Patel',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque ea laudantium, porro animi iure esse hic commodi quae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nihil!'

  },
  {
    key: 4,
    img: AVT4,
    name: 'AVT Patel',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque ea laudantium, porro animi iure esse hic commodi quae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nihil!'

  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Peoples</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}

      >
        {
          allData.map((event) => {
            return (
              <SwiperSlide className='testimonial'>
                <div className="client_avatar" key={event.key}>
                  <img src={event.img} alt="Image hai Kuch aur kuch nhi..." />
                </div>
                <h5 className='name_client'>{event.name}</h5>
                <small className='review'>{event.review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
};

export default Testimonial;