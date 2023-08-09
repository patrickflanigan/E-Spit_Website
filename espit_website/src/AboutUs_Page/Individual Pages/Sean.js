import React from 'react';
import './Individual_Slides.css';
import Sean from '../../Photos/TheTeam/Sean.jpg'; // Photo of the whole team with the car
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';


const blurb = "Hey everyone! My name is Sean McMillan and I am majoring in the computer science. On campus I’m involved in the fraternity Lambda Chi Alpha and as a community advisor to the freshman. It was phenomenal to have had worked on the software for this project!"


function isDesktop() {
  const width = window.innerWidth;
  // some js way to detect if user is on a mobile device
  if (width < 1000){
    return false;}
  else{
    return true;
    }
  }


function Sean_Page() {

    const navigate = useNavigate();

    const GotoPat = () => {
      console.log('Navigating to Pats Page!');
      navigate('/AboutPat'); // navigate to the '/About Us' page
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
        <img className="Image" src={Sean} alt="Meet Sean" />
        <div className='Right-Side'>
        <p className="Blurb" >{blurb}</p>
        <button class = "Next-Button" onClick={GotoPat}>Next: <br></br>Meet Pat Flanigan!</button>
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
      <img className="Image-mobile" src={Sean} alt="Sean" />
      <div className='Right-Side-mobile'>
      <p className="Blurb-mobile" >{blurb}<br></br></p>
      <button className = "Next-Button-mobile" onClick={GotoPat}>Next: <br></br>Meet Pat Flanigan!</button>
      <button className = "Eject-Button-mobile" onClick={BailFromPage}>I'm done learning about these dope kids.. </button>
        </div>
      </div>
    </div>
    )}
    </div>
  );
}


export default Sean_Page;
