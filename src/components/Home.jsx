import Button from './Button';
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
                <div className="slide">
                    <div className='slide-info'>
                        <p>
                            Please help African Children Make them a better life!

                            <span>
                                <Button content='Donate' />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className='slide-info'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis 

                            <span>
                                <Button content='Donate' />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className='slide-info'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis 
                            <span>
                                <Button content='Donate' />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className='slide-info'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                            <span>
                                <Button content='Donate' />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className='slide-info'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis 
                            <span>
                                <Button content='Donate' />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className='slide-info'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis 
                            <span>
                                <Button content='Donate' />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className='slide-info'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis  
                            <span>
                                <Button content='Donate' />
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
