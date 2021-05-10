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
                <a className='contact--info--font' href='/'>chrisweriksen@hotmail.com<i className="fa fa-envelope" ></i></a>
                <hr className='hr'></hr>
                <hr className='hr'></hr>
                <a className='contact--info--font' href="https://www.facebook.com/Skov.music/">www.facebook.com/Skov.music<i className="fa fa-facebook link"  ></i></a>
                <hr className='hr'></hr>
                <hr className='hr'></hr>
                <a className='contact--info--font' href="https://www.instagram.com/chriseriksenmusic/?hl=enef=">instagram | @chriseriksenmusic<i className="fa fa-instagram link"></i></a>
            </div>
        </div>
    )
}

export default ContactInfo
