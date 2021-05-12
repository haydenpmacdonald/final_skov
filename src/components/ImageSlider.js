import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../styles/ImageSlider.css';
import slider from '../slider-content'

const ImageSlider = () => {
    return (
        <div className='carousel--cont'>
            <Carousel fade>
            {slider.map(slide => (
              <Carousel.Item>
                <img className='slider--image' src={slide.img} alt={slide.alt}></img>
              </Carousel.Item>
              ))}
            </Carousel>
            
        </div>
    )
}

export default ImageSlider
