import React from "react";


import Landing_Page from "./Landing_Page/Landing_Page.js"
import AboutUs from './AboutUs_Page/AboutUs_Page.js';
import Our_Team from './AboutUs_Page/Individual Pages/Our_Team.js';

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
            <Route path="/AboutBlaise"  element={<Landing_Page/>}/>
        </Routes>
    </Router>
    </div>
    )
  }
  export default App;