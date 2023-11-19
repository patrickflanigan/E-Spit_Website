import React from 'react';
import '../index';
import './Glass_Spit_Model.css';
import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../Models/Glass_Spitfire';

function Glass_Spit_Model(){


    return(
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas
            resize={{ scroll: false }}
                colorManagement
                    shadowMap // highlight-line
                    camera={{ position: [-200, 15, 30], fov: 90 }}>

                {/* Ambient Light */}
                <ambientLight intensity={0.1} color="#ffffff" />

                {/* Directional Light */}
                <directionalLight intensity={0.6} castShadow position={[10, 10, 10]} />

                <OrbitControls />
                <Suspense fallback={null}>
                    <Model/>
                </Suspense>
            </Canvas></div>
    );


}

export default Glass_Spit_Model;