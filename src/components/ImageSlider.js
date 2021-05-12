import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../styles/ImageSlider.css';
// import slider from '../slider-content'

const ImageSlider = () => {
    return (
        <div className='carousel--cont'>
            <Carousel >
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="images/header.jpeg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="images/chrisbush.jpeg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/header3.jpeg"
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="images/header4.jpeg"
                alt="Second slide"
              />
            </Carousel.Item>
           
  
            </Carousel>
        </div>
    )
}

export default ImageSlider
