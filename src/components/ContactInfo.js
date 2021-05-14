import React from 'react'
import '../styles/ContactInfo.css';

const ContactInfo = () => {
    return (
        <div>
            <div className='contact--section--hero'>
                <div className='contact--section--overlay'>
                    <h1 className='bio--header'>Contact</h1>
                </div>
            </div>
            <div className='contact--info--container'>
                <a className='contact--info--font' href='/'>chriswseriksen@hotmail.com</a>
                <hr className='hr'></hr>
                <hr className='hr'></hr>
                <a className='contact--info--font' href="https://www.facebook.com/Skov.music/">www.facebook.com/Skov.music</a>
                <hr className='hr'></hr>
                <hr className='hr'></hr>
                <a className='contact--info--font' href="https://www.instagram.com/chriseriksenmusic/?hl=enef=">instagram | @chriseriksenmusic</a>
            </div>
        </div>
    )
}

export default ContactInfo
