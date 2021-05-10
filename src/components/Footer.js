import React from 'react'
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className='footer--container'>
            <div className='footer--nav--links--cont'>
                    <ul>
                        <li className='footer--nav--item'>
                          <Link style={{textDecoration: 'none', color: 'white'}} to="/">
                                Home
                            </Link>  
                        </li>
                        <li className='footer--nav--item'>
                            <Link style={{textDecoration: 'none', color: 'white' }} to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className='footer--nav--item'>
                            <Link style={{textDecoration: 'none', color: 'white'}} to="/team">
                                Team
                            </Link>
                        </li>
                        <li className='footer--nav--item'>
                            <Link style={{textDecoration: 'none', color: 'white'}} to="/discography">
                                Discography
                            </Link>
                        </li>
                    </ul>
            </div>
        
                <div className='footer--nav--links--cont'>
                    <ul>
                        <li className='footer--nav--item'><a href='https://open.spotify.com/artist/5tpiMGYTziZVZL6iwrjJmk'><i className="fab fa-spotify"></i></a></li>
                        <li className='footer--nav--item'><a href='https://music.apple.com/ca/artist/skov/1501059364'><i className="fab fa-apple"></i></a></li>
                        <li className='footer--nav--item'><a href='https://www.facebook.com/Skov.music/'><i className="fab fa-facebook"></i></a></li>
                        <li className='footer--nav--item'><a href='https://www.instagram.com/chriseriksenmusic/?hl=en'><i className="fab fa-instagram"></i></a></li>
                        <small className='websuitestudio'>site by <a href='http://www.websuitestudio.com'> &nbsp; &nbsp;<Image className='footer--logo' src='images/white-transparent.png'></Image></a></small>
                    </ul>
                </div>
            
        </div>
    )
}

export default Footer
