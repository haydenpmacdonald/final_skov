
import React from 'react';
import '../styles/LowerHero.css';
import { Link } from 'react-router-dom';

const LowerHero = () => {
    return (
        <div className='lower--hero'>
            <div className='lower--hero--overlay'>
                <h1 data-aos="fade-in">Vision</h1>
                <hr></hr>
                <p data-aos="fade-in">
                    Chris has visions to see the world with his music, to inspire, create, help and support people, 
                    as well as help artists find a voice in the same way he is.
                </p>
                <Link to='/contact'>
                    <button className='contact--chris'>CONTACT CHRIS</button>
                </Link>
            </div>
        </div>
    )
}

export default LowerHero
