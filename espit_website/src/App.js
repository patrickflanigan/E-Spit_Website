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

        </Routes>
    </Router>
    </div>
    )
  }
  export default App;