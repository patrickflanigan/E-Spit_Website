import React, {useState} from 'react';
import './Gallery_Widget.css';
import CloseIcon from '@mui/icons-material/Close';

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



const Gallery_Widget = () =>{
    
    let data =[
        {
            id: 1,
            imgSrc: American_Flag,
        },
        {
            id: 2,
            imgSrc: Batts_And_BMS,
        },
        {
            id: 3,
            imgSrc: Blaise_Grace,
        },
        {
            id: 4,
            imgSrc: Brad_Working,
        },
        {
            id: 5,
            imgSrc: Full_Team,
        },
        {
            id: 6,
            imgSrc: In_Garage,
        },
        {
            id: 7,
            imgSrc: Proshaper1,
        },
        {
            id: 8,
            imgSrc: Proto_Dash,
        },
        {
            id: 9,
            imgSrc: Sprungers,
        },
        {
            id: 10,
            imgSrc: Walking_In,
        },
        {
            id: 11,
            imgSrc: WPI1,
        }
    ]
    
    const [model, setModel] = useState(false);
    const [tempimgsrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    
    return(
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempimgsrc} />
            <CloseIcon onClick={() => setModel(false)}/>
        </div>

        <div className="gallery_widget">
            {data.map((item, index) =>{
                return(
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery_Widget;

