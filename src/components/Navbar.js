import { useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className="navbar">
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
              <NavLink to="/meditation">Meditation Corner</NavLink>
            </li>
            <li className='events navbar-item'>
              <NavLink to="/events">Upcoming Events</NavLink>
            </li>
            <li className='get-started navbar-item'>
              <a href='#getstarted'>Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar