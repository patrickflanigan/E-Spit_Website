import React from 'react';
import './Individual_Slides.css';
import Shane from '../../Photos/TheTeam/Shane.jpg'; // Photo of the whole team with the car
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';


const blurb = "Hey Everybody, my name’s Shane, I’m a CS major on the project. I’m super excited to be goin' on this project and bring this car to life!"

function isDesktop() {
  const width = window.innerWidth;
  // some js way to detect if user is on a mobile device
  if (width < 1000){
    return false;}
  else{
    return true;
    }
  }



function Shane_Page() {

    const navigate = useNavigate();

    const GotoWynn = () => {
      console.log('Navigating to Wynn Page!');
      navigate('/AboutWynn'); // navigate to the '/About Us' page
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
        <img className="Image" src={Shane} alt="Meet Shane Donahue" />
        <div className='Right-Side'>
        <p className="Blurb" >{blurb}</p>
        <button class = "Next-Button" onClick={GotoWynn}>Next: <br></br>Meet Wynn Roberts</button>
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
      <img className="Image-mobile" src={Shane} alt="Shane" />
      <div className='Right-Side-mobile'>
      <p className="Blurb-mobile" >{blurb}<br></br></p>
      <button className = "Next-Button-mobile" onClick={GotoWynn}>Next: <br></br>Meet Wynn Roberts!</button>
      <button className = "Eject-Button-mobile" onClick={BailFromPage}>I'm done learning about these dope kids.. </button>
        </div>
      </div>
    </div>
    )}
    </div>
  );
}


export default Shane_Page;
