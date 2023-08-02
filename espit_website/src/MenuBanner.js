// MenuBanner.js
import React from 'react';
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





  return (
    <div className="menu-banner">
      {/* Your menu content goes here */}
      <nav>
        <ul>
        <li><button onClick={handlegohomeClick}>Home Page</button></li>
          <li><button onClick={handleaboutusClick}>About Our Team</button></li>
          <li><button onClick={handlegohomeClick}>Photo Gallery</button></li>
          <li><button onClick={handlegohomeClick}>Donate</button></li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default MenuBanner;