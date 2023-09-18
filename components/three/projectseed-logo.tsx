'use client'

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ProjectSeedLogoModel from './ProjectseedLogo';

const ProjectSeedLogo = () => {
  return (
    <div className='relative w-full h-full'>
        <Canvas 
            orthographic    
            camera={{  zoom:50, fov:65, near: 0.1, far:2000 ,position: [0, 0, 800] }}
        >
           <ambientLight intensity={1.5}/>
            <pointLight args={['white',100,50]} position={[10,0,0]}/>         
            <pointLight args={['white',100,50]} position={[-10,0,0]}/>         
            <pointLight args={['white',100,50]} position={[0,0,-10]}/>         
            <pointLight args={['white',100,100]} position={[0,0,10]}/>   
               <ProjectSeedLogoModel rotation={[0,1,0]} scale={4} position={[0,-1.5,0]}/>
            <OrbitControls  enableZoom={false} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined}/>
        </Canvas>
    </div>
  )
}

export default ProjectSeedLogo