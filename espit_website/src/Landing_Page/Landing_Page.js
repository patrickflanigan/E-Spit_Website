import React, { useEffect, useRef, useState } from 'react';
import MenuBanner from '../MenuBanner'; // Import the MenuBanner component

import './Landing_Page.css';
import isDesktop from '../Global_Functions';

import ScrollUpButton from '../Components/ScrollUpButton.js';
import ScrollDownButton from '../Components/ScrollDownButton.js';
import Spitfire_Team_Bridge_Photo from '../Photos/Landing_Page/Spitfire_Team_Bridge_Photo.jpg'; // Photo of the Spitfire Team standing on WPI Bridge
import Team_Timelapse from "../Photos/Landing_Page/Team_Pullapart.mp4";
import Self_Driving from "../Photos/Landing_Page/Self_Driving.mp4";
import Jacked_Up_Test from "../Photos/Landing_Page/Jacked_Up_Test.mp4";
import Machining from "../Photos/Landing_Page/Machining.mp4";
import Logic_Diagram from "../Photos/Landing_Page/Logic_Diagram.jpg";
import Drivetrain_CAD from "../Photos/Landing_Page/Drivetrain_CAD.jpg";
import Dashboard_Real from "../Photos/Landing_Page/Dashboard_Real.jpg";
import Dashboard_CAD from "../Photos/Landing_Page/Dashboard_CAD.JPG";
import Spitfire_Dashcam_Processed from "../Photos/Landing_Page/SpitfireDashcamProcessed.mp4";
import Dev_SpitfireUIDemo from "../Photos/Landing_Page/First_Spit_UI_Demo.mp4";
import SpitfireUIDemo from "../Photos/Landing_Page/SpitfireUIDemo.webm";
import SpitfireLeavingSprungers from "../Photos/Landing_Page/First_Drive.mp4";


const Spitfire_Bridge_Width = 5800 //pixels
const Spitfire_Bridge_Height = 3800 //pixels
const Glass_Spit_Model = React.lazy(() => import('./Glass_Spit_Model_Page')); // attempt to 'lazy load' the integrated CAD file to prevent lag on page load.


function Landing_Page() {

  const appRef = useRef(null);
  const [backgroundHeight, setBackgroundHeight] = useState(0);

  // The two lines below scale the bridge photo to correct proportions for varying screen sizes
  const ScalingFactor = window.innerWidth/Spitfire_Bridge_Width;
  const imageheight = Spitfire_Bridge_Height * ScalingFactor;

  useEffect(() => {
    setBackgroundHeight(imageheight);
  }, []);



  return (
    <div>
    {(isDesktop()) ? (  // If the user is on desktop, the program will return the below lines:
    <div className="App"> {/* This is the div for the entire page */}
      <MenuBanner/>       {/* This is the menu banner component at the very top of the page */}
      
      {/* Below is the 'Team & Bridge' background photo */}
      <div className="App" style={{ backgroundImage: `url(${Spitfire_Team_Bridge_Photo})`, height: `${backgroundHeight}px` }}></div>
      
      {/* Below is the black buffer under the bridge photo that reads 'Welcome to the Electric Spitfire website' */}
      <div className="Landing-page-buffer" style={{ height: `${backgroundHeight/2.25}px` }}>
        <header className="App-header" style={{ height: `${backgroundHeight}px` }}>
          <p>
            Welcome to the website for the Electric Spitfire!
          </p>
        </header>
      </div>
      
      {/* Below is the timelapse of the team taking out the engine */}
      <video controls autoPlay loop muted className="video-container">
          <source src={Team_Timelapse} type="video/mp4"></source>
      </video>

      {/* Below is Up/Down arrows and the CAD file of the Spitfire */}
      {/* <ScrollUpButton /> */}
      {/* <Glass_Spit_Model /> */}
      {/* <ScrollDownButton /> */}

      {/* This is a white buffer space with a bit of writing about how awesome this project is */}
      <div className="Landing-page-buffer-2" style={{ height: `${backgroundHeight/2.25}px` }}>
        <header className="App-header" style={{ height: `${backgroundHeight}px` }}>
          <p>
            Welcome to the website for the Electric Spitfire!
          </p>
        </header>
      </div>

      {/* Below is a Fusion 360 export of the "Spitfire Overview CAD - It's a 'see through' full model." */}
      <iframe src="https://myhub.autodesk360.com/ue2a20a23/shares/public/SH512d4QTec90decfa6e3e5f5bdb4e5f1046?mode=embed" width="1024" height="768" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
      
      {/* Below is the static CAD image of the spitfire drivetrain design */}
      <img id="Drivetrain_CAD" className="drivetrain-cad-container" src={Drivetrain_CAD}/>;

      {/* Below is the video of the CNC machining the battery cooling plates */}
      <video controls autoPlay loop muted class="machining-container">
          <source src={Machining} type="video/mp4"></source>
      </video>

      {/* Below is the video of the car spinning its wheels while on jack stands */}
      <video controls autoPlay loop muted className="jacked-test-container">
          <source src={Jacked_Up_Test} type="video/mp4"></source>
      </video>

      {/* Below is the image of the car's software logic diagram */}
      <img id="Logic_Diagram" src={Logic_Diagram}/>;

      {/* Below is the video of the dashcam ADAS */}
      <video controls autoPlay loop muted className="spitfire-dashcam-container">
          <source src={Spitfire_Dashcam_Processed} type="video/mp4"></source>
      </video>

      {/* Below is the video of the car during a 'self-driving' test */}
      <video controls autoPlay loop muted class="self-driving-container">
          <source src={Self_Driving} type="video/mp4"></source>
      </video>

      {/* Below is the image of the CAD design for the dashboard */}
      <img id="Dashboard_CAD" className="dashboard-cad-container" src={Dashboard_CAD}/>;

      {/* Below is the video of the first dashboard UI interface */}
      <video controls autoPlay loop muted class="dashboard-container">
          <source src={Dev_SpitfireUIDemo} type="video/mp4"></source>
      </video>

      {/* Below is the video of the second dashboard UI interface */}
      <video controls autoPlay loop muted className="dashboard-real-container">
          <source src={SpitfireUIDemo} type="video/mp4"></source>
      </video>

      {/* Below is an image of the real, assembled dashboard */}
      <img id="Dashboard_Real" className="dashboard-real-container" src={Dashboard_Real}/>;

      {/* Below is the video of the car on the road in Uxbridge on the way to Worcester! */}
      {/* <video controls autoPlay loop muted width={700}> */}
          {/* <source src={SpitfireLeavingSprungers} type="video/mp4"></source> */}
      {/* </video> */}

    </div>

    ):(   // If viewer is on mobile, the program will return the below lines:
      
    <div className="App">
      <MenuBanner />
      <div className="App" style={{ backgroundImage: `url(${Spitfire_Team_Bridge_Photo})`, height: `${backgroundHeight}px` }}>
        <header className="App-header" style={{ height: `${backgroundHeight}px` }}>
          <p>
            Welcome to the website for the Electric Spitfire!
          </p>
        </header>
      </div>
      <div className="Landing-page-buffer-mobile
      " style={{ height: `${backgroundHeight/1}px` }}></div>
      {/* <ScrollUpButton />
      <Glass_Spit_Model />
      <ScrollDownButton /> */}
      <iframe src="https://myhub.autodesk360.com/ue2a20a23/shares/public/SH512d4QTec90decfa6e3e5f5bdb4e5f1046?mode=embed" width="1024" height="768" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
    </div>
    )}
    </div>   
  );
}


export default Landing_Page;
