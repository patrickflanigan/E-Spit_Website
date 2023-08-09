import React from 'react';
import './Individual_Slides.css';
import Pat from '../../Photos/TheTeam/Pat.jpg'; // Photo of the whole team with the car
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';


const blurb = "I'm Patrick Flanigan, a Robotics Engineer with a minor in Computer Science, as well as a WPI rower."
const blurb2 = "I've owned this 1972 Triumph Spitfire since November 2017, and I seriously can't believe what a ride it's been. The car's been through thick and thin and brought so many people along for the journey."
const blurb3 = "I can't believe how lucky we are to have the opportunity for such a fantastic project, with such a great team. This was an amazing project on so many levels. Definitely check out the website and get in touch with any of us for some great stories!"


function isDesktop() {
  const width = window.innerWidth;
  // some js way to detect if user is on a mobile device
  if (width < 1000){
    return false;}
  else{
    return true;
    }
  }


function Pat_Page() {

    const navigate = useNavigate();

    const GotoHome = () => {
      console.log('Navigating to Blaise Page!');
      navigate('/Our_Team_Page'); // navigate to the '/About Us' page
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
        <img className="Image" src={Pat} alt="Meet Pat Flanigan" />
        <div className='Right-Side'>
        <p className="Blurb" >{blurb}<br></br><br></br>{blurb2}<br></br><br></br>{blurb3}</p>
        <button class = "Next-Button" onClick={GotoHome}>Next: <br></br>Back to Our Team</button>
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
  <img className="Image-mobile" src={Pat} alt="Pat" />
  <div className='Right-Side-mobile'>
  <p className="Blurb-mobile" >{blurb}<br></br><br></br>{blurb2}<br></br><br></br>{blurb3}</p>
  <button className = "Next-Button-mobile" onClick={GotoHome}>Back to our team... </button>
  <button className = "Eject-Button-mobile" onClick={BailFromPage}>I'm done learning about these dope kids.. </button>
    </div>
  </div>
</div>
)}
</div>
    
  );
}


export default Pat_Page;
