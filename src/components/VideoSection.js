import React, { useState, useEffect } from 'react';
import '../components/VideoSection.css'; 

import backgroundVideo from '../assets/video.mp4';
import ServicesSection from './ServicesSection';
import CustomPackages from './CustomPackages';
import LocationsSection from './LocationsSection';
import Footer from './Footer';
import { useNavigate } from 'react-router';
function VideoSection() {
  const navigate = useNavigate()
  function goToform(){
    navigate("/signUp")
  }
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const paragraphs = [
    "Adventure is worthwhile in itself.",
    "Live Life with no excuses.",
    "Travel with no regrets",
    
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setParagraphIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [paragraphs.length]);
  
  

  
  // const [showArrow, setShowArrow] = useState(false);
  // const [arrowClicked, setArrowClicked] = useState(false);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowArrow(true);
  //   }, 3000); 

  //   return () => clearTimeout(timeout); 
  // }, []);
  // const handleArrowClick = () => {
  //   setArrowClicked(true);
  // };
  return (
    <>
    <div className="video-section" id="home">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className="content">
      <h1>Explore the most Detailed World</h1>
          <p>{paragraphs[paragraphIndex]}</p>
        <button onClick={goToform} className="register-link">Register Now</button> 
    </div>
    {/* {showArrow && !arrowClicked && (
          <div className="slide-down-arrow" onClick={handleArrowClick}>
            <span></span>
           
          </div>
        )}
        {arrowClicked && (
          <div className="shifted-content">
            {<ServicesSection />}
          </div>
        )} */}
      </div>
   <ServicesSection />
   <CustomPackages />
   <LocationsSection />
   <Footer />
   </>

  );
}

export default VideoSection;
