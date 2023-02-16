import {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.png'

import './Navbar.css'
import Testimonials from './Testimonials'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <header>
            <div className="brand">
               <NavLink exact to="/"> <img src={logo} alt="logo" title='brand'/></NavLink>
            </div>

            <div className="nav-wrapper">
                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/work">Our Work</NavLink>
                    <NavLink to="/future-goals">Future Goals</NavLink>
                    <NavLink to="/testimonial">Testimonial</NavLink>
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
