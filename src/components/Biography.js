import React from 'react';
import '../styles/Biography.css';



const Biography = () => {
    return (
        <div className='bio--container'>
            <h1 data-aos="fade-in" className='bio--header'>Biography</h1>
            <div className='bio--inner--text--container'>
                <p data-aos="fade-in">
                    ”Skov.” is the solo project Chris Eriksen has been long waiting to release. 
                    From his childhood love of Blues and Rock, to his new found admiration for electronic/R&B, 
                    Chris's new music stems from a different place than his other groups.
                </p>
                <p data-aos="fade-in">
                    Chris is a staple in the Victoria music scene, playing with the likes of both Mad Mona and Trophy Dad, 
                    as well as playing in the local cover music secene. With a vast variety of sounds and artists playing with Chris, Skov. 
                    is able to create a sound similar to the Black keys, Arctic Monkeys, Nathaniel Rateliff and more, while still maintaining a unique sound with experimental backing vocals, 
                    with lots of instrumental layers of synth and piano to be explored as you listen to the music, over and over again.
                </p>
            </div>
            <div className='bio--inner--text--container'>
                <h3 data-aos="fade-in" className='bio--inner--text--h3'>This is an alternative rock band that doesn’t want to except the norms of being a stuck in a small city.</h3>
            </div>
            <hr className='hr'></hr>
            <hr className='hr'></hr>
        </div>
    )
}

export default Biography
