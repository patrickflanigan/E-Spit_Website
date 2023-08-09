// MenuBanner.js
import React from 'react';
import './MenuBanner.css'
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';



function MenuBanner() {

  const navigate = useNavigate();

  const handleaboutusClick = () => {
    console.log('Navigating to About Us!');
    navigate('/AboutUs'); // navigate to the '/About Us' page
  }

  const handlegohomeClick = () => {
    console.log('Navigating to Home Page!');
    navigate('/'); // navigate to the '/' (home) page
  }

  const handlegotogallery = () => {
    console.log('Navigating to Gallery Page!');
    navigate('/Gallery'); // navigate to the '/' (home) page
  }





  return (
    <div className="menu-banner">
      {/* Your menu content goes here */}
      <nav>
        <ul>
        <li><button onClick={handlegohomeClick}>Home Page</button></li>
          <li><button onClick={handleaboutusClick}>About Our Team</button></li>
          <li><button onClick={handlegotogallery}>Photo Gallery</button></li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default MenuBanner;