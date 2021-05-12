import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import '../styles/Slider.css';
import image1 from '../header.jpeg'
import image2 from '../header3.jpeg'
import image3 from '../header4.jpeg'

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <div className='carousel--cont'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className=" slider-- d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='bio--header'>Skov Music</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider--image d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='bio--header'>Skov Music</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider--image d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='bio--header'>Skov Music</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default Slider
