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
}

export default Navbar
