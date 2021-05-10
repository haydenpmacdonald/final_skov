import React from 'react'
import '../styles/TheTeam.css';

const TheTeam = () => {
    return (
        <div>
            <div className='team--section--hero'>
                <div className='team--section--overlay'>
                    <div className='team--section--left'>
                        <h1 className='bio--header'>Team</h1>
                    </div>
                    <div className='team--section--right'>       
                        <h5 className='team--section--job'>Session Drummer & Studio Owner</h5>
                            Lucas Mckinnon: <a href='http://www.silversidesound.com'>Silversidesound.com</a>
                            <hr className='team--hr'></hr>
                        
                        <h5 className='team--section--job'>Guitar</h5>
                            Quinn Colpman: &nbsp;Colpmanmusic@gmail.com
                            <hr className='team--hr'></hr>
                            
                        <h5 className='team--section--job'>Bass</h5>
                            Duncan Ritcher-Sly & Grant Parkins            
                            <hr className='team--hr'></hr>
                            
                        <h5 className='team--section--job'>Drums & Percussion</h5>
                            Alex Campbell
                            <hr className='team--hr'></hr>
                             
                        <h5 className='team--section--job'>Keyboard & Piano</h5>
                            Sam Laramee
                            <hr className='team--hr'></hr>
                            
                           
                        <h5 className='team--section--job'>Vocals</h5>
                            Maddy Dorion & Amanda Meiklejohn
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheTeam
