import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>We are a passionate team of travelers...</p>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Guided Tours</li>
            <li>Adventure Trips</li>
            <li>Custom Packages</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: info@travelwonders.com</p>
          <p>Phone: +1-123-456-7890</p>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com/i/events/1553421612493455360"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/explore/"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 TravelWonders. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
