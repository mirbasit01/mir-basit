import PreviousMap_ from 'postcss/lib/previous-map'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import { Leva, useControls } from 'leva';
const Hero = () => {

  const  x = useControls('HackersRoom', {
    positionX: {
     value: 2.5,
     min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    scale: {
      value: 2.5,
      min: -10,
      max: 10,
    },
  })
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl 
            font-medium text-white text-center font-generalsans'>Hi,
            I'm Abdul Basit
            <span  className='waving-hand'>👋 
             </span>
                </p> 
                <p className='hero_tag text-gray_gradient'>
                    Building Products & Brands
                </p>
        </div>
        
          <div className="w-full h-full absolute inset-0">
                      <Leva/>

      <Canvas className="w-full h-full">
        <Suspense fallback={<CanvasLoader/>}> 
        {/* Camera setup */}
        <PerspectiveCamera
          makeDefault // Ensures this camera is the default
          position={[0, 0, 30]} // Position the camera
         />
          <HackerRoom 
          //  scale={0.07}
            // position={[0, 0,0]}
            // rotation={[0, 280, 0]}
            position={[x.positionX,  x.positionY, x.positionZ]}
            rotation={[x.rotationX,  x.rotationY, x.rotationZ]}
            scale={[x.scale,  x.scale, x.scale]}
          />
          <ambientLight intensity={1} />
          <directionalLight  position={[10, 10, 10]}  intensity={0.5}/>
                       </Suspense>

      </Canvas>
    </div>
      
    </section>
   )
}

export default Hero                