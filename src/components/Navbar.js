import { useState} from 'react'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'
import '../styles/Navbar.css'
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (

    <nav className="navbar">
          <div className='ad-container'>
            <h1>Join our community and be the change.</h1>
          </div>
      <div className="container">
        <div className="logo">
            <h1><span>PURPLE </span> AUDIENCE</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li className='home navbar-item'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className='meditation navbar-item'>
              <NavLink to="/meditation">Meditation</NavLink>
            </li>
            <li className='events navbar-item'>
              <NavLink to="/events">Upcoming Events</NavLink>
            </li>
            <motion.li whileHover = {{scale:0.95}} transition = {{type:"keyframes",stiffness:100}} className='get-started navbar-item'>
              <a href='#getstarted'>Get Started</a>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar