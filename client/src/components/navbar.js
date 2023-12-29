import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useAuth } from "../contextAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { user, logout } = useAuth();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header>
      {/* Advertisement Banner */}
      <div className='ad-container'>
        <h1>Join our community and be the change.</h1>
      </div>

      {/* Navigation Menu */}
      <nav className='navigation-menu'>
        <h1 className='logo'>
          <span>PURPLE</span> AUDIENCE
        </h1>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li className='home'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='about'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='meditation'>
            <NavLink to='/meditation'>Meditation</NavLink>
          </li>

          <li className='events'>
            <NavLink to='/events'>Events</NavLink>
          </li>
          <ul className='auth-links'>
            <li className='get-started'>
              <a href='#newsletter'> Newsletter</a>
            </li>
          </ul>
        </ul>
        {user ? (
          <div className='user-dropdown'>
            <div className='user-greeting' onClick={toggleUserMenu}>
              {`User: ${user.username}`}
              {"   "}
              <i className='fa-solid fa-angle-down'></i>
            </div>
            {isUserMenuOpen && (
              <ul className='user-dropdown-menu'>
                <li>
                  Your Profile
                  <span>
                    {" "}
                    <br />
                    (Coming Soon)
                  </span>
                </li>
                <li onClick={logout}>Logout</li>
              </ul>
            )}
          </div>
        ) : (
          <li className='login'>
            <NavLink to='/register'>Register Yourself</NavLink>
          </li>
        )}

        <div className='menu-toggle' onClick={toggleMenu}>
          <i className='fa-solid fa-bars'></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
