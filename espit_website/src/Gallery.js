import React from 'react';
import './Gallery.css';
import American_Flag from './Photos/Gallery/American_Flag.jpg';
import Batts_And_BMS from './Photos/Gallery/Batts_And_BMS.jpg';
import Blaise_Grace from './Photos/Gallery/Blaise_Grace.jpg';
import Brad_Working from './Photos/Gallery/Brad_Working.jpg';
import Full_Team from './Photos/Gallery/Full_Team.jpg';
import In_Garage from './Photos/Gallery/In_Garage.jpg';
import Proshaper1 from './Photos/Gallery/Proshaper1.jpg';
import Proto_Dash from './Photos/Gallery/Proto_Dash.jpg';
import Sprungers from './Photos/Gallery/Sprungers.jpeg';
import Walking_In from './Photos/Gallery/Walking_In.jpg';
import WPI1 from './Photos/Gallery/WPI1.jpg';
import MenuBanner from './MenuBanner';

const images = [
  { src: American_Flag, alt: 'Image 1' },
  { src: Batts_And_BMS, alt: 'Image 2' },
  { src: Blaise_Grace, alt: 'Image 3' },
  { src: Brad_Working, alt: 'Image 4' },
  { src: Full_Team, alt: 'Image 5' },
  { src: In_Garage, alt: 'Image 6' },
  { src: Proshaper1, alt: 'Image 7' },
  { src: Proto_Dash, alt: 'Image 8' },
  { src: Sprungers, alt: 'Image 10' },
  { src: Walking_In, alt: 'Image 11' },
  { src: WPI1, alt: 'Image 12' }
];

function Gallery() {

  const onClickHandler = () => {
    console.log('Fullscreen! Image :');
  };

  return (
    <div>
        <MenuBanner />
        <div className="gallery">
        {images.map((image, index) => (
            <img
            key={index}
            className="gallery__item"
            src={image.src}
            alt={image.alt}
            onClick={onClickHandler}
            />
        ))}
        </div>
        </div>
  );
}

export default Gallery;