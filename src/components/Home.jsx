// import { useState } from 'react';
import '../App.css';
import './Styles/Home.css';


import { Canvas } from '@react-three/fiber';

import Information from './Information.jsx';

import { Environment, OrbitControls } from '@react-three/drei';

import { BubbleTea } from './BubbleTea.jsx';

import swipe_icon from '../assets/swipe.gif';


//------//

function Home() {  
  return (
    <>
    <div className='heading'>
      <h1>All About Bubble Tea</h1>

      <p>Interact with a 3D Model!</p>
    </div>

    {/* <img src={swipe_icon} width="100" height="100" /> */}
    
    {/* <Information/>

    <Canvas>
    <OrbitControls />
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
    </Canvas> */}
  
  <div className='bubbletea'>
    <Canvas camera={{fov: 90}}>
    <Environment preset='city'/>
    <OrbitControls />
    <ambientLight/>
    
    <BubbleTea/> 
    </Canvas>
  </div>
      
    <div className='information_section'>
      <p>
      The beverage also known as boba drink, pearl tea drink,
      or boba tea, called Chun Shui Tang, Liu Han-Chieh, first
      came up with the idea of serving tea cold in the early 1980s.
      </p>
      
      <p>
      Learn more by clicking the other options by the bar above!
      </p>

      </div>
    
    <footer>
      Made with the love of bubble tea lovers (like me) ❤️

    </footer>


    <a href='https://sketchfab.com/3d-models/boba-tea-2be1f3c8a0e54150bb61a438940b6921'>Model</a>

    </>
  )
}

export default Home
