/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/ANOTHER.gltf -T 
Files: ./public/ANOTHER.gltf [914.73KB] > ANOTHER-transformed.glb [5.67MB] (-520%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ANOTHER-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.mesh_1.geometry} material={materials.PaletteMaterial002} />
    </group>
  )
}

useGLTF.preload('/ANOTHER-transformed.glb')
