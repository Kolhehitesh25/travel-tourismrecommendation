import React from 'react';
import '../components/ServicesSection.css'; 
import tourImage from '../assets/images/tour.png';
import guidesImage from '../assets/images/guide.jpg';
import accommodationImage from '../assets/images/accommodation.jpg';
import cruiseExcursionsImage from '../assets/images/cruise-excursions (2).jpg';
// // import { Link } from 'react-scroll';
function ServicesSection() {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-container"  id="services" >
        <div className="service">
          <img src={tourImage} alt="Customized Tours" />
          <h3>Customized Tours</h3>
          <p>Explore the world with our carefully crafted customized tours.</p>
        </div>
        <div className="service">
          <img src={guidesImage} alt="Expert Guides" />
          <h3>Expert Guides</h3>
          <p>Travel with our experienced guides who know the ins and outs of each destination.</p>
        </div>
        <div className="service">
          <img src={accommodationImage} alt="Luxury Accommodation" />
          <h3>Luxury Accommodation</h3>
          <p>Indulge in luxury accommodations during your journey for a memorable stay.</p>
        {/* <Link to="locations" smooth={true} duration={500} className="register-link">Explore Locations</Link>  */}
        </div>
<div className="service">
           <img src={cruiseExcursionsImage} alt="Expert Guides" />
           <h3>Cruise Excursions</h3>
           <p>Explore the sea with exciting cruise excursions.</p>
         </div>
      </div>
    </div>
  );
}

export default ServicesSection;
