/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/Lightweight_Glass_Spit.gltf -T 
Files: ./public/Lightweight_Glass_Spit.gltf [915.4KB] > Lightweight_Glass_Spit-transformed.glb [5.67MB] (-519%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Lightweight_Glass_Spit-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.mesh_1.geometry} material={materials.PaletteMaterial002} />
    </group>
  )
}

useGLTF.preload('/Lightweight_Glass_Spit-transformed.glb')
