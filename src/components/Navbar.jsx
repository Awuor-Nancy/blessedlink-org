import {useState} from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'

import './Navbar.css'
// import Testimonials from './Testimonials'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <header>
            <div className="brand">
               <Link exact to="/"> <img src={logo} alt="logo" title='brand'/></Link>
            </div>

            <div className="nav-wrapper">
                <nav>
                    <Link exact to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/work">Our Work</Link>
                    <Link to="/future-goals">Future Goals</Link>
                    <Link to="/testimonial">Testimonial</Link>
                </nav>
                <div className="btn-container">
                    <button type='button' className='donate-btn'>Donate</button>
               </div>
            </div>
        </header>
    )
        
        // <div className='header'>
        //     <nav className='navbar'>
        //         <a href='/' className='logo'>
        //             <img src={logo} alt='logo' />
        //         </a>
        //         <div className='hamburger' onClick={handleClick}>
        //             {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
        //                 : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

        //         </div>
        //         <ul className={click ? "nav-menu active" : "nav-menu"}>
        //             <li className='nav-item'>
        //                 <a href='/' onClick={closeMenu}>Home</a>
        //             </li>
        //             <li className='nav-item'>
        //                 <a href='#about' onClick={closeMenu}>About</a>
        //             </li>
        //             <li className='nav-item'>
        //                 <a href='#about' onClick={closeMenu}>Our Work</a>
        //             </li>
        //             <li className='nav-item'>
        //                 <a href='#about' onClick={closeMenu}>Future Goals</a>
        //             </li>
        //             <li className='nav-item'>
        //                 <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
        //             </li>
        //             <li className='nav-item'>
        //                 <a href='#demo' onClick={closeMenu}>Contact</a>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
    // )
}

export default Navbar
