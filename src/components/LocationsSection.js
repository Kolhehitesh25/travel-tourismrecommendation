

// import React, { useState } from 'react';
// import '../components/LocationsSection.css';
// import location1Image from '../assets/images/location1.jpg';
// import location2Image from '../assets/images/location2.jpg';
// import location3Image from '../assets/images/location3.jpg';
// // Add more location images here...

// function LocationsSection() {
//   const [showTour, setShowTour] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(null);


//   const handleLocationClick = (countryName) => {
//     setSelectedCountry(countryName);
//     setShowTour(true);
//   };

//   const closeModal = () => {
//     setShowTour(false);
//     setSelectedCountry(null);
//   };

//   const locationMap = {
//     'India': 'https://www.airpano.com/embed.php?3D=taj-mahal-india" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen></><br><div style="float:right">Courtesy of < href="https://www.airpano.com/" target="_blank">www.AirPano.com',
//     'France': 'https://www.google.com/maps/embed?pb=!4v1692538600443!6m8!1m7!1sCAoSLEFGMVFpcE5rUzlCMVdYQlFSZk1Wd3BKNnNrUndlZzZKXzA0R1MxdmVYWUU0!2m2!1d48.85837009999999!2d2.2944813!3f264.3868703653586!4f28.209563734776737!5f0.4000000000000002',
//     'Italy': 'https://www.google.com/maps/embed?pb=!4v1694845738962!6m8!1m7!1sCAoSLEFGMVFpcE9MYnlLdldkU2o1emozQXdOWG5iT1ZYOTNVYVBRaDYtQVpXTDkt!2m2!1d41.8902102!2d12.4922309!3f17.88746!4f0.11253999999999564!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  
//   };

//   return (
//     <div className="locations-section" id="tours">
//       <h2>Featured Locations</h2>
//       <div className="locations-container">
//         <div className="location" onClick={() => handleLocationClick('India')}>
//           <div className="location-image">
//             <img src={location1Image} alt="Location 1" />
//             <div className="location-overlay">
//               <p>India</p>
//             </div>
//           </div>
//         </div>

//         <div className="location" onClick={() => handleLocationClick('France')}>
//           <div className="location-image">
//             <img src={location2Image} alt="Location 2" />
//             <div className="location-overlay">
//               <p>France</p>
//             </div>
//           </div>
//         </div>

//         <div className="location" onClick={() => handleLocationClick('Italy')}>
//           <div className="location-image">
//             <img src={location3Image} alt="Location 3" />
//             <div className="location-overlay">
//               <p>Italy</p>
//             </div>
//           </div>
//         </div>
//         {/* Add more locations here... */}
//       </div>

//       {showTour && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <h3>{selectedCountry}</h3>
//             <iframe
//               title="Google Virtual Tour"
//               width="100%"
//               height="600"
//               src={locationMap[selectedCountry]}
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LocationsSection;
import React, { useState } from 'react';
import '../components/LocationsSection.css'; 
import location1Image from '../assets/images/location1.jpg';
import location2Image from '../assets/images/location2.jpg';
import location3Image from '../assets/images/location3.jpg';
import location4Image from "../assets/images/location4.jpg";
import location5Image from "../assets/images/location5.jpg";
import location6Image from "../assets/images/location6.jpg";
import location7Image from "../assets/images/location7.jpg";
import location8Image from "../assets/images/location8.jpg";
import location9Image from "../assets/images/location9.jpg";
import location10Image from "../assets/images/location10.jpg";
import location11Image from "../assets/images/location11.jpg";
import location12Image from "../assets/images/location12.png";
import location13Image from "../assets/images/location13.png";
import location14Image from "../assets/images/location14.png";
import location15Image from "../assets/images/location15.png";


function LocationsSection() {
  const [showTour, setShowTour] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); 

  const locations = [
    {
      image: location1Image,
      name: "Location 1",
      country: "India",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!4v1692538600443!6m8!1m7!1sCAoSLEFGMVFpcE5rUzlCMVdYQlFSZk1Wd3BKNnNrUndlZzZKXzA0R1MxdmVYWUU0!2m2!1d48.85837009999999!2d2.2944813!3f264.3868703653586!4f28.209563734776737!5f0.4000000000000002",
    },
    {
      image: location2Image,
      name: "Location 2",
      country: "France",
      mapUrl:
        'https://www.airpano.com/embed.php?3D=taj-mahal-india" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen></><br><div style="float:right">Courtesy of < href="https://www.airpano.com/" target="_blank">www.AirPano.com',
    },
    {
      image: location3Image,
      name: "Location 3",
      country: "Italy",
      mapUrl:
        'https://www.google.com/maps/embed?pb=!4v1694845738962!6m8!1m7!1sCAoSLEFGMVFpcE9MYnlLdldkU2o1emozQXdOWG5iT1ZYOTNVYVBRaDYtQVpXTDkt!2m2!1d41.8902102!2d12.4922309!3f17.88746!4f0.11253999999999564!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    },
    {
      image: location4Image,
      name: "Location 4",
      country: "Thailand",
      mapUrl:
        'https://www.google.com/maps/embed?pb=!4v1694845738962!6m8!1m7!1sCAoSLEFGMVFpcE9MYnlLdldkU2o1emozQXdOWG5iT1ZYOTNVYVBRaDYtQVpXTDkt!2m2!1d41.8902102!2d12.4922309!3f17.88746!4f0.11253999999999564!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    },

    {
      image: location5Image,
      name: "Location 5",
      country: "Cuba",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!4v1692538600443!6m8!1m7!1sCAoSLEFGMVFpcE5rUzlCMVdYQlFSZk1Wd3BKNnNrUndlZzZKXzA0R1MxdmVYWUU0!2m2!1d48.85837009999999!2d2.2944813!3f264.3868703653586!4f28.209563734776737!5f0.4000000000000002",
    },
    {
      image: location6Image,
      name: "Location 6",
      country: "Egypt",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!4v1692538600443!6m8!1m7!1sCAoSLEFGMVFpcE5rUzlCMVdYQlFSZk1Wd3BKNnNrUndlZzZKXzA0R1MxdmVYWUU0!2m2!1d48.85837009999999!2d2.2944813!3f264.3868703653586!4f28.209563734776737!5f0.4000000000000002",
    },
    {
      image: location7Image,
      name: "Location 7",
      country: "Japan",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!4v1692538600443!6m8!1m7!1sCAoSLEFGMVFpcE5rUzlCMVdYQlFSZk1Wd3BKNnNrUndlZzZKXzA0R1MxdmVYWUU0!2m2!1d48.85837009999999!2d2.2944813!3f264.3868703653586!4f28.209563734776737!5f0.4000000000000002",
    },
    {
      image: location8Image,
      name: "Location 8",
      country: "Greece",
      mapUrl:
        'https://www.airpano.com/embed.php?3D=taj-mahal-india" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen></><br><div style="float:right">Courtesy of < href="https://www.airpano.com/" target="_blank">www.AirPano.com',
    },
    {
      image: location9Image,
      name: "Location 9",
      country: "Spain",
      mapUrl:
        'https://www.airpano.com/embed.php?3D=taj-mahal-india" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen></><br><div style="float:right">Courtesy of < href="https://www.airpano.com/" target="_blank">www.AirPano.com',
    },
    {
      image: location10Image,
      name: "Location 10",
      country: "United States",
      mapUrl:
        'https://www.airpano.com/embed.php?3D=taj-mahal-india" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen></><br><div style="float:right">Courtesy of < href="https://www.airpano.com/" target="_blank">www.AirPano.com',
    },
    {
      image: location11Image,
      name: "Location 11",
      country: "Australia",
      mapUrl:
        'https://www.airpano.com/embed.php?3D=taj-mahal-india" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen></><br><div style="float:right">Courtesy of < href="https://www.airpano.com/" target="_blank">www.AirPano.com',
    },
    {
      image: location12Image,
      name: "Location 12",
      country: "canada",
      mapUrl:
        'https://www.airpano.com/embed.php?3D=taj-mahal-india" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen></><br><div style="float:right">Courtesy of < href="https://www.airpano.com/" target="_blank">www.AirPano.com',
    },
    {
      image: location13Image,
      name: "Location 13",
      country: "Brazil",
      mapUrl:
        'https://www.airpano.com/embed.php?3D=taj-mahal-india" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen></><br><div style="float:right">Courtesy of < href="https://www.airpano.com/" target="_blank">www.AirPano.com',
    },
    {
      image: location14Image,
      name: "Location 14",
      country: "United Arab Emirates",
      mapUrl:
        'https://www.airpano.com/embed.php?3D=taj-mahal-india" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen></><br><div style="float:right">Courtesy of < href="https://www.airpano.com/" target="_blank">www.AirPano.com',
    }, 
    {
      image: location15Image,
      name: "Location 15",
      country: "Iceland",
      mapUrl:
        'https://www.airpano.com/embed.php?3D=taj-mahal-india" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen></><br><div style="float:right">Courtesy of < href="https://www.airpano.com/" target="_blank">www.AirPano.com',
    },
    {
      image: location15Image,
      name: "Location 15",
      country: "Iceland",
      mapUrl:
        'https://www.airpano.com/embed.php?3D=taj-mahal-india" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" framespacing="0" allowfullscreen></><br><div style="float:right">Courtesy of < href="https://www.airpano.com/" target="_blank">www.AirPano.com',
    },
  ];

  const handleLocationClick = (mapUrl) => {
    setSelectedCountry(mapUrl);
    setShowTour(true);
  };

  const closeModal = () => {
    setShowTour(false);
    setSelectedCountry(null);
  };

  const filteredLocations = locations.filter((location) => {
    const countryName = location.country.toLowerCase();
    return countryName.includes(searchQuery.toLowerCase());
  });
  const shouldDisplayLocations = searchQuery.trim() === '' ? false : true;

  return (
    <div className="locations-section" id="tours">
      <h2>Featured Locations</h2>

   
      <input
      className='input2'
        type="text"
        placeholder="Search by country"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
  {shouldDisplayLocations && (
      <div className="locations-container">
        {filteredLocations.map((location, index) => (
          <div key={index} className="location" onClick={() => handleLocationClick(location.mapUrl)}>
            <div className="location-image">
              <img src={location.image} alt={location.name} />
              <div className="location-overlay">
                <p>{location.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  )}
  
      {showTour && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>{selectedCountry}</h3>
            <iframe
              title="Google Virtual Tour"
              width="100%"
              height="600"
              src={selectedCountry}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocationsSection;