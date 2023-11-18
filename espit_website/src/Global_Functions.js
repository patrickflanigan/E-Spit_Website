import React from 'react';


function isDesktop() {
    const width = window.innerWidth;
    // some js way to detect if user is on a mobile device
    if (width < 1000){
      return false;}
    else{
      return true;
      }
    }

export default isDesktop;