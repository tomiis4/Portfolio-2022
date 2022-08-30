/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/MainModel.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[-3.16, 2.09, -3.98]} rotation={[-Math.PI / 2, 0, 0.41]} scale={2.78} />
      <mesh geometry={nodes.Text.geometry} material={materials.Material} position={[-4.72, 4.82, -3.23]} rotation={[Math.PI / 2, 0, -0.41]} scale={0.77} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} position={[4.73, 2.9, 0.68]} scale={0.9} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.001']} position={[4.73, 2.86, 0.68]} scale={0.9} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.001']} position={[4.73, 2.9, 2.79]} scale={0.9} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.001']} position={[4.73, 2.86, 2.79]} scale={0.9} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.001']} position={[4.73, 3.59, 1.7]} scale={0.9} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.001']} position={[4.73, 3.55, 1.7]} scale={0.9} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.001']} position={[3.51, 3.86, -5.94]} rotation={[0, Math.PI / 2, 0]} scale={0.9} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Material.001']} position={[3.51, 3.82, -5.94]} rotation={[0, Math.PI / 2, 0]} scale={0.9} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.001']} position={[1.73, 3.46, -5.94]} rotation={[0, Math.PI / 2, 0]} scale={0.9} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Material.001']} position={[1.73, 3.42, -5.94]} rotation={[0, Math.PI / 2, 0]} scale={0.9} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[5.16, 5.54, 2.81]} rotation={[0, 0, -0.12]} scale={0.72} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Material.001']} position={[5.16, 4.83, 1.6]} rotation={[0, 0, -0.12]} scale={0.72} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['Material.001']} position={[5.16, 4.83, 3.98]} rotation={[0, 0, -0.12]} scale={0.72} />
      <mesh geometry={nodes.Head.geometry} material={materials['Material.006']} position={[3.5, 5.66, -5.52]} rotation={[-0.06, 0.44, 0.01]} scale={0.15} />
      <mesh geometry={nodes.Crown.geometry} material={materials['Material.005']} position={[3.5, 5.89, -5.51]} rotation={[3.08, 0.34, 3.14]} scale={0.15} />
      <mesh geometry={nodes.Body.geometry} material={materials['Material.002']} position={[3.45, 5.45, -5.39]} scale={0.21} />
      <mesh geometry={nodes.Wrap.geometry} material={materials['Material.007']} position={[3.44, 5.69, -5.69]} scale={0.19} />
      <mesh geometry={nodes.Belt.geometry} material={materials['Material.004']} position={[3.45, 5.33, -5.41]} scale={[0.03, 0.03, 0.02]} />
      <mesh geometry={nodes.Sword.geometry} material={materials['Material.001']} position={[3.74, 5.63, -5.55]} rotation={[-0.31, 0.15, -0.04]} scale={0.02} />
      <mesh geometry={nodes.Base.geometry} material={materials['Material.008']} position={[3.85, 4.96, -5.57]} scale={0.37} />
      <mesh geometry={nodes.Projector.geometry} material={materials['Material.012']} position={[-3.1, 1.49, -4.01]} rotation={[0, 0.41, 0]} scale={[1.15, 1.08, 1]} />
      <mesh geometry={nodes.Automat.geometry} material={materials['Material.013']} position={[-2.83, 1.64, 1.61]} rotation={[-Math.PI, 0.43, -Math.PI]} scale={1.2} />
      <mesh geometry={nodes.Notebook.geometry} material={materials['Material.020']} position={[2.13, 3.52, -6.01]} scale={1.02} />
      <mesh geometry={nodes.BookBig.geometry} material={materials['Material.010']} position={[1.46, 4.67, -5.59]} scale={[0.32, 0.32, 0.27]} />
      <mesh geometry={nodes.BookSmall.geometry} material={materials['Material.009']} position={[1.26, 4.68, -5.57]} scale={[0.32, 0.32, 0.27]} />
      <group position={[2.02, 4.56, -5.52]} scale={0.46}>
        <mesh geometry={nodes.Cube079.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Cube079_1.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Chair.geometry} material={materials['Material.001']} position={[2.05, 1.05, -2.89]} rotation={[0, 0.47, 0]} scale={1.02} />
      <mesh geometry={nodes.Coffe.geometry} material={materials['Material.015']} position={[4.13, 2.71, -5.1]} scale={0.2} />
      <mesh geometry={nodes.Mouse.geometry} material={materials['Material.019']} position={[3.71, 3.97, -5.2]} scale={1.02} />
      <mesh geometry={nodes.MouseUnder.geometry} material={materials['Material.016']} position={[4.27, 3.09, -5.36]} scale={1.02} />
      <mesh geometry={nodes.Phone.geometry} material={materials['Material.018']} position={[0.78, 2.7, -4.65]} rotation={[-0.45, -0.02, -0.01]} scale={0.13} />
      <mesh geometry={nodes.PhoneHolder.geometry} material={materials['Material.017']} position={[1.04, 2.76, -4.42]} scale={0.41} />
      <mesh geometry={nodes.Table.geometry} material={materials['Material.014']} position={[1.18, 0.45, -4.92]} scale={1.02} />
      <mesh geometry={nodes.HideBorder.geometry} material={materials['Material.001']} position={[-5.22, 0.51, -6.01]} />
      <mesh geometry={nodes.HideBorder2.geometry} material={materials['Material.001']} position={[4.81, 0.54, 3.98]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Floor.geometry} material={materials['Material.023']} position={[-3.45, 1.46, 4.98]} />
      <mesh geometry={nodes.Wall.geometry} material={materials['Material.001']} position={[-4.15, 8.85, 2.07]} scale={8.82} />
      <mesh geometry={nodes.WallLight.geometry} material={materials['Material.024']} position={[-4.15, 8.85, 2.07]} scale={8.82} />
      <mesh geometry={nodes.Bed.geometry} material={materials['Material.011']} position={[2.86, 0.52, 1.82]} rotation={[0, -Math.PI / 2, 0]} scale={1.18} />
    </group>
  )
}

useGLTF.preload('/models/MainModel.gltf')