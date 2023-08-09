import React from 'react';
import './Individual_Slides.css';
import Wynn from '../../Photos/TheTeam/Wynn.jpg'; // Photo of the whole team with the car
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';


const blurb = "My name is Wynn Roberts and I am a Mechanical Engineering major at WPI, with a minor in Spanish. Outside of our electric vehicle conversion I am one of the captains of the rowing team, and spend a lot of time at lake Quinsig. I love being outside and working hard, whether it’s hiking, skiing, or biking. "
const blurb2 = "One on my favorite parts of this project was spinning up the CNC machines in Washburn and getting some custom fabrication completed for the Spitfire."

function isDesktop() {
  const width = window.innerWidth;
  // some js way to detect if user is on a mobile device
  if (width < 1000){
    return false;}
  else{
    return true;
    }
  }



function Wynn_Page() {

    const navigate = useNavigate();

    const GotoGrace = () => {
      console.log('Navigating to Grace Page!');
      navigate('/AboutGrace'); // navigate to the '/About Us' page
    }

    const BailFromPage = () => {
        console.log('Navigating to About_Us Page!');
        navigate('/AboutUs'); // navigate to the '/About Us' page
      }


  return (
    <div>
    {(isDesktop()) ? (
    <div className="GeneralTeam">
      <p>
      This is the electric spitfire team. Go ahead and scroll through these slides to learn more about each one of us!
      </p>
      <div className="OurTeam">
        <img className="Image" src={Wynn} alt="Meet Blaise" />
        <div className='Right-Side'>
        <p className="Blurb" >{blurb}{blurb2}</p>
        <button class = "Next-Button" onClick={GotoGrace}>Next: <br></br>Meet Grace Magnotta!</button>
        <button class = "Eject-Button" onClick={BailFromPage}>I'm done learning about these dope kids.. </button>
        </div>
      </div>
      
    </div>

):(
  <div className="GeneralTeam-mobile">
  <p>
  This is the electric spitfire team. Go ahead and scroll through these slides to learn more about each one of us!
  </p>
  <div className="OurTeam-mobile">
  <img className="Image-mobile" src={Wynn} alt="Wynn" />
  <div className='Right-Side-mobile'>
  <p className="Blurb-mobile" >{blurb}{blurb2}<br></br></p>
  <button className = "Next-Button-mobile" onClick={GotoGrace}>Next: <br></br>Meet Grace Magnotta!</button>
  <button className = "Eject-Button-mobile" onClick={BailFromPage}>I'm done learning about these dope kids.. </button>
    </div>
  </div>
</div>
)}
</div>
    
  );
}


export default Wynn_Page;
