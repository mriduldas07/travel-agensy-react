import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className='container'>
          <h2 className='text-center my-3'><span className="text-info">Travelers</span> for Pleaser</h2>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: '700px'}}
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Travel comes from haven</h2>
          <p>Life is  journey.For that, travel is a entertainment for everyone.</p>
          <address>Bercelona,Spain</address>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: '700px'}}
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Flight for Istambul</h2>
          <p>I love travel.So, i open a guide system to travel for me,travel for others.</p>
          <address>Istambul,Turkey</address>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;