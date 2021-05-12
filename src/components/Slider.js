import React from 'react'
// import { Carousel } from 'react-bootstrap'
import '../styles/Slider.css';
// import image1 from '../header.jpeg'
// import image2 from '../header3.jpeg'
// import image3 from '../header4.jpeg'
import { Link } from 'react-router-dom';

const Slider = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
    return (
        <div className='carousel--cont'>
          <div className='temporary--carousel--section'>
          <h3 className='slider--header'>Skov Music</h3>
          <div className='slider--text'>
            This is an alternative rock band that doesn’t want to accept the norms of being a stuck in a small city.
            <br></br>
            <br></br>
            
            <button className='contact--chris'><Link to='/contact'>CONTACT CHRIS</Link></button>
          </div> 
         
          </div>
          {/* <Carousel activeIndex={index} onSelect={handleSelect}>
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
    </Carousel> */}
        </div>
    )
}

export default Slider
