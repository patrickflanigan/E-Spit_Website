import React from 'react';
import './Our_Team.css';
import Our_Team from '../../Photos/TheTeam/Full_Team.jpg'; // Photo of the whole team with the car
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';


const blurb = "This is our team! 8 Students at WPI"





function Landing_Page() {

    const navigate = useNavigate();

    const GotoBlaise = () => {
      console.log('Navigating to Blaise Page!');
      navigate('/AboutBlaise'); // navigate to the '/About Us' page
    }




  return (
    <div className="GeneralPage">
    <p>
    This is the electric spitfire team. Go ahead and scroll through these slides to learn more about each one of us!
    </p>
    <div className="OurTeam">
    <img className="Image" src={Our_Team} alt="Our Team" />
    <p className="Blurb" >{blurb}</p>
    <button onClick={GotoBlaise}>Next: <br></br>Meet Blaise!</button>
    </div>
    </div>
    
  );
}


export default Landing_Page;
