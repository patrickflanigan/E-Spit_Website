/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 ./public/Glass_Spitfire.gltf -T 
Files: ./public/Glass_Spitfire.gltf [3.26MB] > Glass_Spitfire-transformed.glb [3.91MB] (-20%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Glass_Spitfire-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.mesh_1.geometry} material={materials.PaletteMaterial002} />
    </group>
  )
}

useGLTF.preload('/Glass_Spitfire-transformed.glb')
