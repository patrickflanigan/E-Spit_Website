import React from 'react';
import './Individual_Slides.css';
import Grace from '../../Photos/TheTeam/Grace.jpg'; // Photo of the whole team with the car
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';


const blurb = "Hi everyone! My name is Grace Magnotta. I’m a Mechanical Engineer with a minor in International and Global Studies. Outside of this MQP, I’m president of Alpha Gamma Delta and on the cheer team. I’m excited to embark on this amazing endeavor. Check out the rest of this website to see our progress!"


function isDesktop() {
  const width = window.innerWidth;
  // some js way to detect if user is on a mobile device
  if (width < 1000){
    return false;}
  else{
    return true;
    }
  }


function Grace_Page() {

    const navigate = useNavigate();

    const GotoSean = () => {
      console.log('Navigating to Sean Page!');
      navigate('/AboutSean'); // navigate to the '/About Us' page
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
        <img className="Image" src={Grace} alt="Meet Grace" />
        <div className='Right-Side'>
        <p className="Blurb" >{blurb}</p>
        <button class = "Next-Button" onClick={GotoSean}>Next: <br></br>Meet Sean McMillan!</button>
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
  <img className="Image-mobile" src={Grace} alt="Grace" />
  <div className='Right-Side-mobile'>
  <p className="Blurb-mobile" >{blurb}<br></br></p>
  <button className = "Next-Button-mobile" onClick={GotoSean}>Next: <br></br>Meet Sean McMillan!</button>
  <button className = "Eject-Button-mobile" onClick={BailFromPage}>I'm done learning about these dope kids.. </button>
    </div>
  </div>
</div>
)}
</div>
    
  );
}


export default Grace_Page;
