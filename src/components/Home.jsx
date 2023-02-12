import React from 'react'
import './Home.css'

const Hero = () => {
    return (
        <div className='hero'>
             <div className='content'>
                <p>Call us</p>
                <p>Welcome to</p>
                <p>Blessed Link</p>
                <p>Zaidi ya Dreams.Inc</p>
                <button href='/' className='button'>Donate</button>
            </div>

            <div className="slider">
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
            </div>

        </div>
    )
}

export default Hero
