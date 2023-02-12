import React from 'react'
import jane from './images/jane.jpg'
import isaac from './images/isaac.jpg'
import rebecca from './images/rebecca.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={rebecca} alt='Rebecca'/>
                        <p>I see myself growing each and every day. 
                            Aside from that I have got to learn some business ideas from you ladies. I am more confident, 
                            and this group has taught me how to stand with elegance and how to outshine as <strong>proverbs 31</strong> woman.
                            I love you mum Beverlyne for standing with us and guiding us through</p>
                        <p><span>Rebecca</span></p>
                        <strong>Spiritual ladies Platform</strong>
                      
                    </div>
                    <div className='card'>
                        <img src={jane} alt='Jane'/>
                        <p>I was so depressed due to lack of employment due to challenges I had and also family challenges .
                            I felt my studies was a waste of time and money since I had no chance for employment.
                            But thank God I met philies and strong prayerful ladies who helped me overcome it and found Joy in my heart.
                            May God reward this platform abundantly and continue to give hope and minister to the world.</p>
                        <p><span>Jane</span></p>
                        <strong>Spiritual ladies Platform</strong>
                    </div>
                    <div className='card'>
                        <img src={isaac} alt='Isaac'/>
                        <p>happy since the business has been of help to my family and I, in food, giving out thanksgiving, 
                            helping my parents with the small amount I get from the business and small chama savings that I joined. 
                            Since I started of sandals selling business, things have been flowing nicely until the rise of economy in our country, demolition that took place in Kibera
                            Thank you so much for the support you gave me and am so much grateful, may the Almighty God bless you</p>
                        <p><span>Isaac</span></p>
                        <strong> Business Funding, Business Training.</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
