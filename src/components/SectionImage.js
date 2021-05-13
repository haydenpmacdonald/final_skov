import React from 'react'
import '../styles/SectionImage.css';
import { Link } from 'react-router-dom';

const SectionImage = () => {
    return (
        <div>
            <div className='section--image'>
                <h1 className='section--header'>Skov Music</h1>
                <div className='section--text'>
                    <p>This is an alternative rock band that doesn’t want to accept the norms of being a stuck in a small city.</p>
                    <button className='section--button'><Link to='/contact'>CONTACT CHRIS</Link></button>
                    
                </div>
                
            </div>
        </div>
    )
}

export default SectionImage
