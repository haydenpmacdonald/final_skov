
import React from 'react';
import '../styles/News.css';

const News = () => {
    return (
        <div className='news--container'>
            <h1 className='bio--header'>Latest News</h1>
            <br></br>
            <h2 data-aos="fade-in">The Zone 91.3 Band of the Month</h2>
            <br></br>
            <img data-aos="fade-right" className='news--image' src='images/band-of-the-month.png' alt=''></img>
            <br></br>
            <button data-aos-duration="1500" data-aos="fade-in" className='news--button'>
            <a href='https://www.thezone.fm/2021/05/01/botm-skov/'>VIEW ARTICLE</a>
            </button>

            <h2 data-aos="fade-in">Dark Ice - May 28th</h2>
            <br></br>
            <img data-aos="fade-left" className='news--image' src='images/dark-ice.png' alt=''></img>
            <br></br>
            <button data-aos-duration="1500" data-aos="fade-in" className='news--button'>
            <a href='https://distrokid.com/hyperfollow/skov/dark-ice-2'>PRE-SAVE</a>
            </button>

            <h2 data-aos="fade-in">Faded. (feat. Madeleine Daye) - July 2nd</h2>
            <br></br>
            <img data-aos="fade-right" className='news--image' src='images/faded.png' alt=''></img>
            <br></br>
            <button data-aos-duration="1500" data-aos="fade-in" className='news--button'>
            <a href='https://distrokid.com/hyperfollow/chriseriksen/faded-feat-madeleine-daye'>PRE-SAVE</a>
            </button>
            
        </div>
    )
}

export default News
