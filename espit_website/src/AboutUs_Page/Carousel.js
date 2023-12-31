import React, { useState, useRef } from 'react';
import { Carousel } from "react-responsive-carousel";
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sprite from "./sprite.svg";


import OurTeam from '../Photos/TheTeam/Full_Team.jpg'; // with import
import Blaise from '../Photos/TheTeam/Blaise.jpg'; // with import
import Brad from '../Photos/TheTeam/Brad.jpg'; // with import
import Shane from '../Photos/TheTeam/Shane.jpg'; // with import
import Grace from '../Photos/TheTeam/Grace.jpg'; // with import
import Sean from '../Photos/TheTeam/Sean.jpg'; // with import
import Wynn from '../Photos/TheTeam/Wynn.jpg'; // with import
import Pat from '../Photos/TheTeam/Pat.jpg'; // with import

const images = [
  OurTeam,
  Blaise,
  Brad,
  Shane,
  Wynn,
  Grace,
  Sean,
  Pat
];

function isDesktop() {
  const width = window.innerWidth;
  // some js way to detect if user is on a mobile device
  if (width < 1000){
    return false;}
  else{
    return true;
    }
  }


const rotateAnimationHandler = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const transitionTimingFunction = "ease-in-out";
  let slideStyle = {
    display: "block",
    minHeight: "100%",
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
    transform: `rotate(0)`,
    position:
      state.previousItem === state.selectedItem ? "relative" : "absolute",
    inset: "0 0 0 0",
    zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
    opacity: state.previousItem === state.selectedItem ? "1" : "0",
    WebkitTransitionDuration: transitionTime,
    MozTransitionDuration: transitionTime,
    OTransitionDuration: transitionTime,
    transitionDuration: transitionTime,
    msTransitionDuration: transitionTime,
  };
  return {
    slideStyle,
    selectedStyle: {
      ...slideStyle,
      opacity: 1,
      position: "relative",
      zIndex: 2,
      filter: `blur(0)`,
    },
    prevStyle: {
      ...slideStyle,
      transformOrigin: " 0 100%",
      transform: `rotate(${
        state.previousItem > state.selectedItem ? "-45deg" : "45deg"
      })`,
      opacity: "0",
      filter: `blur( ${
        state.previousItem === state.selectedItem ? "0px" : "5px"
      })`,
    },
  };
};






function AboutUsCarousel() {

  const navigate = useNavigate();

  const handleImageClick = (index) => {
    console.log("LOGGED CLICK! on slide #")
    console.log(index)

    if(index ==0){
      navigate('/Our_Team_Page')
    }
    else if(index ==1){
      navigate('/AboutBlaise')
    }
    else if(index ==2){
      navigate('/AboutBrad')
    }
    else if(index ==3){
      navigate('/AboutShane')
    }
    else if(index ==4){
      navigate('/AboutWynn')
    }
    else if(index ==5){
      navigate('/AboutGrace')
    }
    else if(index ==6){
      navigate('/AboutSean')
    }
    else if(index ==7){
      navigate('/AboutPat')
    }


  };


  return (
    <div>
    {(isDesktop()) ? (
    <div className="carousel-container">
            <Carousel
            showArrows={false}
            showIndicators
            transitionTime={310}
            animationHandler={rotateAnimationHandler}
            swipeable={true}

            renderArrowNext={(clickHandler, hasNext) => {
              return (
                hasNext && (
                  <div className='custom-arrows'>
                  <button className="arrow right-arrow" onClick={clickHandler}>
                    <svg>
                      <use xlinkHref={sprite + "#right"}></use>
                    </svg>
                  </button>
                  </div>
                )
              );
            }}
            renderArrowPrev={(clickHandler, hasNext) => {
              return (
                hasNext && (
                  <div className='custom-arrows'>
                  <button onClick={clickHandler} className="arrow left-arrow">
                    <svg>
                      <use xlinkHref={sprite + "#left"}></use>
                    </svg>
                  </button>
                  </div>
                )
              );
            }}



          >
        {images.map((URL, index) => (
          <div className="slide" key={index} onClick={() => handleImageClick(index)}>
            <img alt={`Slide ${index + 1}`} src={URL} />
          </div>
        ))}
      </Carousel>
    </div>

    ):(

      <div className="carousel-container-mobile">
      <Carousel
      showArrows={false}
      showIndicators
      transitionTime={310}
      animationHandler={rotateAnimationHandler}
      swipeable={true}

      renderArrowNext={(clickHandler, hasNext) => {
        return (
          hasNext && (
            <div className='custom-arrows'>
            <button className="arrow right-arrow" onClick={clickHandler}>
              <svg>
                <use xlinkHref={sprite + "#right"}></use>
              </svg>
            </button>
            </div>
          )
        );
      }}
      renderArrowPrev={(clickHandler, hasNext) => {
        return (
          hasNext && (
            <div className='custom-arrows'>
            <button onClick={clickHandler} className="arrow left-arrow">
              <svg>
                <use xlinkHref={sprite + "#left"}></use>
              </svg>
            </button>
            </div>
          )
        );
      }}



    >
  {images.map((URL, index) => (
    <div className="slide" key={index} onClick={() => handleImageClick(index)}>
      <img alt={`Slide ${index + 1}`} src={URL} />
    </div>
  ))}
</Carousel>
</div>

    )}
</div>

  );
}

export default AboutUsCarousel;