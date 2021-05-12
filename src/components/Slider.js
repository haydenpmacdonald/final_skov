import React from 'react'
import '../styles/Slider.css';
import { Link } from 'react-router-dom';

const Slider = () => {

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
        </div>
    )
}

export default Slider
