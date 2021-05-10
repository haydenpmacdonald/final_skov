import React from 'react'
import '../styles/AlbumCovers.css';
import albums from '../albums'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const AlbumCovers = () => {
    return (
        <div className='albumcovers--container'>
            <h1 data-aos="fade-in" className='bio--header'>Discography</h1>
            <Col className='albumcovers--col'>
                {albums.map(alb => (
                    <Row>
                        <Card className='album--card'>
                            <Card.Img variant="top" src={alb.image} alt={alb.alt}/>
                            <Card.Body className='card--body'>
                                <Card.Title>{alb.title}</Card.Title>
                                <a href={alb.spotifylink}><i className="fab fa-spotify fa-2x"></i></a>&nbsp;&nbsp;<a href={alb.applelink}><i className="fab fa-apple fa-2x"></i></a>
                            </Card.Body>
                        </Card>
                    </Row>
                ))}
            </Col>       
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='albumcover--hero'>
                <div className='albumcover--hero--overlay'>
                    <button className='albumcover--button'><Link style={{textDecoration: 'none', color: 'red'}}  to='/'>back to home</Link></button>
                </div>
            </div>     
        </div>
    )
}

export default AlbumCovers
