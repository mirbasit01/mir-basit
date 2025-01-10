import PreviousMap_ from 'postcss/lib/previous-map'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
// import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';
// import { someModule } from "module"; // Ensure the module exists.

const Hero = () => {

  // const  x = useControls('HackersRoom', {
  //   positionX: {
  //    value: 2.5,
  //    min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  // })
  const isSmall = useMediaQuery({maxWidth: 440})
  const isMobile = useMediaQuery({maxWidth: 768})
const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes =  calculateSizes(isSmall, isMobile, isTablet)
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
        
          <div className="w-full h-full absolute inset-0 mt-5">
                      {/* <Leva/> */}

      <Canvas className="w-full h-full">
        <Suspense fallback={<CanvasLoader/>}> 
        {/* Camera setup */}
        <PerspectiveCamera
          makeDefault // Ensures this camera is the default
          position={[0, 0, 20]} // Position the camera
         />
         <HeroCamera isMobile={isMobile}>
<HackerRoom 
           
            position={sizes.deskPosition}
            scale={sizes.deskScale}
            rotation={[0, -Math.PI, 0]}
            // position={[x.positionX,  x.positionY, x.positionZ]}
            // rotation={[x.rotationX,  x.rotationY, x.rotationZ]}
            // scale={[x.scale,  x.scale, x.scale]}
          />
         </HeroCamera>
          
          <group>
            <Target position={sizes.targetPosition}/>
            <ReactLogo position={sizes.reactLogoPosition}/>
            <Cube position={sizes.cubePosition} />
            <Rings position={sizes.ringPosition}/>
          </group>
          <ambientLight intensity={1} />
          <directionalLight  position={[10, 10, 10]}  intensity={0.5}/>
                       </Suspense>

      </Canvas>
    </div>

      <div className='absolute bottom-7 left-0 right-0 w-full z-101 c-space'>
          <a href='#contact' className='w-fit'>
               <Button  name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>

      </div>
      
    </section>
   )
}

export default Hero                