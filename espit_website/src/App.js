<<<<<<< HEAD
// Written and maintained by Patrick Flanigan
// Most recently updated 10/15/2023

// This is a react website to document the project converting my 1972 Triumph Spitfire from gasoline to electric.


import React from "react";  //Gotta start somewhere!

import Landing_Page from "./Landing_Page/Landing_Page.js" // This is the 'homepage' of the project.
import AboutUs from './AboutUs_Page/AboutUs_Page.js';     // This is where you land if you click the 'About Us' button in the menu banner
import Our_Team from './AboutUs_Page/Individual Pages/Our_Team.js'; // This is the page where you land if you click the image of our team in the 'about us' page
import Blaise_Page from "./AboutUs_Page/Individual Pages/Blaise.js"; // This is the 'learn about Blaise' page
import Brad_Page from "./AboutUs_Page/Individual Pages/Brad.js";     // This is the 'learn about Brad' page
import Shane_Page from "./AboutUs_Page/Individual Pages/Shane.js";   // This is the 'learn about Shane' page
import Wynn_Page from "./AboutUs_Page/Individual Pages/Wynn.js";     // This is the 'learn about Wynn' page
import Grace_Page from "./AboutUs_Page/Individual Pages/Grace.js";   // This is the 'learn about Grace' page
import Sean_Page from "./AboutUs_Page/Individual Pages/Sean.js";     // This is the 'learn about Sean' page
import Pat_Page from "./AboutUs_Page/Individual Pages/Pat.js";       // This is the 'learn about Pat' page
// We still need a page here for 'Learn about Rachel'
import Gallery_Page from "./Gallery.js";  // Come on Pat! Sort this out.

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // This imports navigation ability between pages. This particular import needs to be after other imports.


function App(){
=======
import React from "react";


import Landing_Page from "./Landing_Page/Landing_Page.js"
import AboutUs from './AboutUs_Page/AboutUs_Page.js';
import Our_Team from './AboutUs_Page/Individual Pages/Our_Team.js';
import Blaise_Page from "./AboutUs_Page/Individual Pages/Blaise.js";
import Brad_Page from "./AboutUs_Page/Individual Pages/Brad.js";
import Shane_Page from "./AboutUs_Page/Individual Pages/Shane.js";
import Wynn_Page from "./AboutUs_Page/Individual Pages/Wynn.js";
import Grace_Page from "./AboutUs_Page/Individual Pages/Grace.js";
import Sean_Page from "./AboutUs_Page/Individual Pages/Sean.js";
import Pat_Page from "./AboutUs_Page/Individual Pages/Pat.js";
import Gallery_Page from "./Gallery.js";


// after other import statements
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){


>>>>>>> origin/main
  return(

    <div className="App">
    <Router>
        <Routes>
            <Route path="/"  element={<Landing_Page/>}/>
            <Route path="/AboutUs"  element={<AboutUs/>}/>
            <Route path="/Our_Team_Page"  element={<Our_Team/>}/>
            <Route path="/AboutBlaise"  element={<Blaise_Page/>}/>
            <Route path="/AboutBrad"  element={<Brad_Page/>}/>
            <Route path="/AboutShane"  element={<Shane_Page/>}/>
            <Route path="/AboutWynn"  element={<Wynn_Page/>}/>
            <Route path="/AboutGrace"  element={<Grace_Page/>}/>
            <Route path="/AboutSean"  element={<Sean_Page/>}/>
            <Route path="/AboutPat"  element={<Pat_Page/>}/>
            <Route path="/Gallery"  element={<Gallery_Page/>}/>
<<<<<<< HEAD
        </Routes>
    </Router>
    </div>

=======

        </Routes>
    </Router>
    </div>
>>>>>>> origin/main
    )
  }
  export default App;