'use client'

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
const glbPath = '/model/projectseedLogo.glb'


const Model = (props: { position: any; rotation: any; scale: any; }) => {
    const { scene, animations } = useGLTF(glbPath);
    const { ref, actions } = useAnimations(animations)
   
    useEffect(() => {
      actions['Anim_0']?.play();
    })

    return (
        <>
            <primitive position={[...props.position]} ref={ref} object={scene} rotation={props.rotation} scale={props.scale} />
        </>
    )
}

export default Model;