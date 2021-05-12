import React from 'react'
import Hero from '../components/Hero';
import News from '../components/News';
import Biography from '../components/Biography';
// import ImageSlider from '../components/ImageSlider';
import LowerHero from '../components/LowerHero';
import Footer from '../components/Footer';

const Index = () => {
    return (
        <div>
            <Hero />
            <News />
            <Biography />
            {/* <ImageSlider />   */}
            <LowerHero />
            <Footer />
        </div>
    )
}

export default Index
