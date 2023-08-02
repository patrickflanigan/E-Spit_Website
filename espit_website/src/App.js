import React from "react";


import Landing_Page from "./Landing_Page/Landing_Page.js"
import AboutUs from './AboutUs_Page/AboutUs_Page.js';

// after other import statements
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){


  return(

    <div className="App">
    <Router>
        <Routes>
            <Route path="/"  element={<Landing_Page/>}/>
            <Route path="/AboutUs"  element={<AboutUs/>}/>
        </Routes>
    </Router>
    </div>
    )
  }
  export default App;