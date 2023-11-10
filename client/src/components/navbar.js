import React,{useState} from "react";
import {NavLink} from "react-router-dom"
import '../styles/navbar.css'
const Navbar = () =>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <header>
            {/* Advertisement Banner */}
             <div className='ad-container'>
                <h1>Join our community and be the change.</h1>
             </div>
             
             {/* Navigation Menu */}
            <nav className="navigation-menu">
                    <h1 className="logo"><span>PURPLE</span> AUDIENCE</h1>
                    <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                        <li className="home">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="about">
                        <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="meditation">
                        <NavLink to="/meditation">Meditation</NavLink>
                        </li>
                      
                        <li className="events">
                        <NavLink to="/events">Events</NavLink>
                        </li>
                        <ul className="auth-links">
                        <li 
                        className="get-started">
                            <a href="#newsletter"> Newsletter</a>
                        </li>
                    </ul>
                    
                    </ul>
                    <div className="menu-toggle" onClick={toggleMenu}>
                    <i class="fa-solid fa-bars"></i>
                    </div>
                    {/* Login or Signup Links */}
                    
            </nav>
        </header>
    )
}

export default Navbar