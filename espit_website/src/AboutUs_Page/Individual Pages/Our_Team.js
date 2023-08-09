import React from 'react';
import './Individual_Slides.css';
import Full_Team from '../../Photos/TheTeam/Full_Team.jpg'; // Photo of the whole team with the car
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';


const blurb = "This is our team!"
const blurb2 = "Meet the eight Students at WPI who converted this convertible."

function isDesktop() {
  const width = window.innerWidth;
  // some js way to detect if user is on a mobile device
  if (width < 1000){
    return false;}
  else{
    return true;
    }
  }



function Our_Team() {

    const navigate = useNavigate();

    const GotoBlaise = () => {
      console.log('Navigating to Blaise Page!');
      navigate('/AboutBlaise'); // navigate to the '/About Us' page
    }




  return (
    <div>
      {(isDesktop()) ? (
    <div className="GeneralTeam">
      <p>
      This is the electric spitfire team. Go ahead and scroll through these slides to learn more about each one of us!
      </p>
      <div className="OurTeam">
        <img className="Image" src={Full_Team} alt="Our Team" />
        <div className='Right-Side'>
        <p className="Blurb" >{blurb}<br></br><br></br>{blurb2}</p>
        <button className = "Next-Button" onClick={GotoBlaise}>Next: <br></br>Meet Blaise Pingree!</button>
        </div>
      </div>
    </div>
    ):(
      <div className="GeneralTeam-mobile">
      <p>
      This is the electric spitfire team. Go ahead and scroll through these slides to learn more about each one of us!
      </p>
      <div className="OurTeam-mobile">
      <img className="Image-mobile" src={Full_Team} alt="Our Team" />
      <div className='Right-Side-mobile'>
      <p className="Blurb-mobile" >{blurb}<br></br><br></br>{blurb2}</p>
      <button className = "Next-Button-mobile" onClick={GotoBlaise}>Next: <br></br>Meet Blaise Pingree!</button>
        </div>
      </div>
    </div>
    )}
    </div>
  );
}


export default Our_Team;
