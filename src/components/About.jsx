import React from 'react'
import bevebabu from './images/bevebabu.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={bevebabu} alt='john' />
                <div className='col-2'>
                    <h2>About Us</h2>
                    <span className='line'></span>
                    <p>Babu and Beverly relocated to Kenya full of zeal to experience a different season in their 
                        adventure of being imitators of Christ Jesus, and showing His love as He is expanding their borders.</p>
                    <p>Then I heard the voice of the Lord saying, “Whom shall I send? And who will go for us?”And I said, “Here am I. Send me!” Isaiah 6:8; NIV</p>
                    
                    <button className='button'>Our work</button>
                </div>
            </div>
        </div>
    )
}

export default About
