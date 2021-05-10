import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../styles/ImageSlider.css';

const ImageSlider = () => {
    return (
        <div className='carousel--cont'>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/header.jpeg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/header3.jpeg"
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/chrisbush.jpeg"
                  alt="Third slide"
                />

                
              </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider