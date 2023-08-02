import React, { useEffect, useRef, useState } from 'react';
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";


import MenuBanner from '../MenuBanner'; // Import the MenuBanner component
import Glass_Spit_Model from './Glass_Spit_Model'; // Import the 3D Glass Spitfire component


import './Landing_Page.css';

import Spitfire_Team_Bridge_Photo from '../Photos/Spitfire_Team_Bridge_Photo.jpg'; // Photo of the Spitfire Team standing on WPI Bridge


const Spitfire_Bridge_Width = 5800 //pixels
const Spitfire_Bridge_Height = 3800 //pixels


function Landing_Page() {

  const appRef = useRef(null);
  const [backgroundHeight, setBackgroundHeight] = useState(0);

  const viewportWidth = window.innerWidth;
  const ScalingFactor = viewportWidth/Spitfire_Bridge_Width;
  const imageheight = Spitfire_Bridge_Height * ScalingFactor;


  useEffect(() => {
    setBackgroundHeight(imageheight);
  }, []);

  return (

    <div className="App">
      <MenuBanner />
      <div className="App" style={{ backgroundImage: `url(${Spitfire_Team_Bridge_Photo})`, height: `${backgroundHeight}px` }}>
        <header className="App-header" style={{ height: `${backgroundHeight}px` }}>
          <p>
            Welcome to the website for the Electric Spitfire!
          </p>
        </header>
      </div>
      <div className="Landing-page-buffer" style={{ height: `${backgroundHeight/2.25}px` }}></div>
      <Glass_Spit_Model style={{ height: `${800}px` }}/>
    </div>
    
  );
}


export default Landing_Page;
