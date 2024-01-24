import React from 'react';
import './CustomPackages.css';
// import imageUrl from "../assets/images/adventure-package.jpg"
function CustomPackages() {
    const packages = [
      {
        title: 'Adventure Getaway',
        description: 'Explore the wilderness with thrilling activities.',
        imageUrl: process.env.PUBLIC_URL + '/images/adventure-package.jpg',
        price: '$499',
      },
      {
        title: 'Beach Paradise',
        description: 'Relax and unwind on the most beautiful beaches.',
        imageUrl: process.env.PUBLIC_URL + '/images/beach-package.jpg',
        price: '$599',
      },
      {
        title: 'Cultural Experience',
        description: 'Immerse yourself in local traditions and heritage.',
        imageUrl: process.env.PUBLIC_URL + '/images/cultural-package.jpg',
        price: '$449',
      },
    ];
  
    return (
      <div className="custom-packages">
        <h2>Custom Packages</h2>
        <div className="package-list">
          {packages.map((pack, index) => (
            <div className="package" key={index}>
              <img src={pack.imageUrl} alt={pack.title} />
              <div className="package-info">
                <h3>{pack.title}</h3>
                <p>{pack.description}</p>
                <p className="price">{pack.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default CustomPackages;
