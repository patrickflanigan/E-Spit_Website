import React, { useEffect, useRef, useState } from 'react';
import AboutUsCarousel from './Carousel.js'
import './AboutUs_Page.css';
import MenuBanner from '../MenuBanner'; // Import the MenuBanner component
import './Carousel.css'; // Create a separate CSS file for your custom styles

const OUR_MISSIONp1 = 
`Our team's mission is to inspire and excite people by bringing modern capabilities to
the craftsmanship of a vintage car.`
const OUR_MISSIONp2 = 
`Our design strives to implement clean energy with a perfect balance of performance and beauty.`;

function isDesktop() {
  const width = window.innerWidth;
  // some js way to detect if user is on a mobile device
  if (width < 1000){
    return false;}
  else{
    return true;
    }
  }

function AboutUs() {

  return (
    <div>
    {(isDesktop()) ? (
    <div>
    <MenuBanner />
    <div className="AboutUs-page-buffer"><h1>Our Mission</h1><text>{OUR_MISSIONp1}</text><text>{OUR_MISSIONp2}</text></div>
    <div className='White-Buffer'></div>
    <div className='Carousel-flex-container'><AboutUsCarousel /></div>
    </div>
      ):(
    <div>
      <MenuBanner />
      <div className="AboutUs-page-buffer-mobile">
      <h1>Our Mission</h1>
      <div className='Mobile-text'>{OUR_MISSIONp1}</div>
      <br></br>
      <div className='Mobile-text'>{OUR_MISSIONp2}</div>
    </div>
    
    <div className='White-Buffer-mobile'></div>
    <div className='Carousel-flex-container-mobile'><AboutUsCarousel /></div>
    </div>
      )}
      </div>
  );
}


export default AboutUs;
