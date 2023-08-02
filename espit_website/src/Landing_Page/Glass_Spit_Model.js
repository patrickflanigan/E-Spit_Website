import '../index';
import './Glass_Spit_Model.css';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../Models/Test_Piece';

function Glass_Spit_Model(){


    return(
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas
                colorManagement
                    shadowMap // highlight-line
                    camera={{ position: [-3, 2, 5], fov: 90 }}>
                <directionalLight
                    intensity={0.5}
                    castShadow // highlight-line
                    shadow-mapSize-height={512}
                    shadow-mapSize-width={512}/>
                <OrbitControls />
                <Suspense fallback={null}>
                    <Model/>
                </Suspense>
            </Canvas></div>
    );


}

export default Glass_Spit_Model;