import React from 'react';
import './Individual_Slides.css';
import Brad from '../../Photos/TheTeam/Brad.jpg'; // Photo of the whole team with the car
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';


const blurb = "Hi everyone! My name is Bradley Sprunger, I am a mechanical engineering major minoring in robotics engineering. I am a captain of the WPI men’s crew team and spent summer '23 working as a solar field technician towards a renewable future! I am beyond excited for this project…let’s go fast!"

function isDesktop() {
  const width = window.innerWidth;
  // some js way to detect if user is on a mobile device
  if (width < 1000){
    return false;}
  else{
    return true;
    }
  }



function Brad_Page() {

    const navigate = useNavigate();

    const GotoShane = () => {
      console.log('Navigating to Blaise Page!');
      navigate('/AboutShane'); // navigate to the '/About Us' page
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
        <img className="Image" src={Brad} alt="Meet Blaise" />
        <div className='Right-Side'>
        <p className="Blurb" >{blurb}</p>
        <button class = "Next-Button" onClick={GotoShane}>Next: <br></br>Meet Shane Donahue!</button>
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
      <img className="Image-mobile" src={Brad} alt="Brad" />
      <div className='Right-Side-mobile'>
      <p className="Blurb-mobile" >{blurb}<br></br></p>
      <button className = "Next-Button-mobile" onClick={GotoShane}>Next: <br></br>Meet Shane Donahue!</button>
      <button className = "Eject-Button-mobile" onClick={BailFromPage}>I'm done learning about these dope kids.. </button>
        </div>
      </div>
    </div>
    )}
    </div>
    

    
  );
}


export default Brad_Page;
