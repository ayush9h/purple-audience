import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com" className="social-link">
          <i className="fa fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" className="social-link">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" className="social-link">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" className="social-link">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
      <p className="copy-text">&copy; 2023 Purple Audience. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
