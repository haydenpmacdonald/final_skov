import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        color: '#F22E35',
        borderColor: '#F22E35',
        background: 'transparent',
    },
  });

const Navbar = () => {
    useEffect(() => { 
        Aos.init({ duration: 3000 });
    }, []);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    const classes = useStyles();
    return (
        <>
        <section>
            <div className='overlay'>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul>
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            skov.
                        </Link>
                    </ul>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-window-close' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>  
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
                                Team
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/discography" className="nav-links" onClick={closeMobileMenu}>
                                Discography
                            </Link>
                        </li>
                    </ul>
                    
         
                </div>
            </nav>
            
                <div className='box--landing--page'>
                    <h1 className='hero--header' data-aos="fade-in">Skov.</h1>
                    <hr className='hr'></hr>
                    <hr className='hr'></hr>
                    
                    <div className='hero--text' data-aos="fade-in" data-aos-duration="1500">
                        <h1>
                            <ul>
                                <li className='hero--text--nav'>
                                    <a hero--text--nav href='https://open.spotify.com/artist/5tpiMGYTziZVZL6iwrjJmk'>
                                        <i className="fab fa-spotify"></i>
                                    </a>
                                </li>
                                <li className='hero--text--nav'>
                                    <a hero--text--nav href='https://music.apple.com/ca/artist/skov/1501059364?uo=4&app=music'>
                                        <i className="fab fa-apple"></i>
                                    </a>
                                </li>
                                <li className='hero--text--nav'>
                                    <a hero--text--nav href='https://www.facebook.com/Skov.music/'>
                                        <i className="fab fa-facebook"></i>
                                    </a>                             
                                </li>
                                <li className='hero--text--nav'>
                                    <a hero--text--nav href='https://www.instagram.com/chriseriksenmusic/?hl=en'>
                                        <i className="fab fa-instagram"></i>
                                    </a>                                   
                                </li>
                            </ul>
                        </h1>
                        
                            <Link className="header--link" to="/discography">
                                <Button variant="outlined" size="medium" className={classes.root}>
                                    Listen now
                                </Button>
                            </Link>
                            <br></br>  
                    </div>
                    <br></br>
                    <br></br>
                </div>
                        <Link className="header--link" to="/discography">
                            <button variant="outlined" className='responsive--button' >LISTEN NOW </button>
                        </Link>
                </div>
            </section>
        </>
    )
}

export default Navbar;