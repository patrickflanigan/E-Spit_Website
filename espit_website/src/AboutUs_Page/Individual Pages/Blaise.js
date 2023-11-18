import React from 'react';
import './Individual_Slides.css';
import Blaise from '../../Photos/TheTeam/Blaise.jpg'; // Photo of the whole team with the car
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';


const blurb = "Hello! My name is Blaise Pingree and I am a mechanical engineering major with a minor in sustainability engineering. I have always been drawn towards old cars, and I hope to work toward a green future, so this project is right up my ally! In my spare time I love guiding raft trips and recently guided an 85 mile trip down desolation canyon in Utah."


function isDesktop() {
  const width = window.innerWidth;
  // some js way to detect if user is on a mobile device
  if (width < 1000){
    return false;}
  else{
    return true;
    }
  }


function Blaise_Page() {

    const navigate = useNavigate();

    const GotoBrad = () => {
      console.log('Navigating to Blaise Page!');
      navigate('/AboutBrad'); // navigate to the '/About Us' page
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
        <img className="Image" src={Blaise} alt="Meet Blaise" />
        <div className='Right-Side'>
        <p className="Blurb" >{blurb}</p>
        <button className = "Next-Button" onClick={GotoBrad}>Next: <br></br>Meet Brad Sprunger!</button>
        <button className = "Eject-Button" onClick={BailFromPage}>I'm done learning about these dope kids.. </button>
        </div>
      </div>
    </div>

    ):(
      <div className="GeneralTeam-mobile">
      <p>
      This is the electric spitfire team. Go ahead and scroll through these slides to learn more about each one of us!
      </p>
      <div className="OurTeam-mobile">
      <img className="Image-mobile" src={Blaise} alt="Blaise" />
      <div className='Right-Side-mobile'>
      <p className="Blurb-mobile" >{blurb}<br></br></p>
      <button className = "Next-Button-mobile" onClick={GotoBrad}>Next: <br></br>Meet Brad Sprunger!</button>
      <button className = "Eject-Button-mobile" onClick={BailFromPage}>I'm done learning about these dope kids.. </button>
        </div>
      </div>
    </div>
    )}
    </div>
    
  );
}


export default Blaise_Page;
