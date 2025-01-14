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
      <p>All About Bubble Tea!</p>

      <p></p>
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
  
  <div className="bubbletea-section">

  <div className="bubbletea-background"></div>

  <div className="bubbletea-content">
    <Canvas camera={{ fov: 60, zoom: 2.5, position: [-5, -10, 5] }}>
      <Environment preset="city" />
      <ambientLight />
      <BubbleTea />
    </Canvas>
    </div>
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

      <br></br>

      <a href='https://sketchfab.com/3d-models/boba-tea-2be1f3c8a0e54150bb61a438940b6921'>Model</a>

    </footer>



    </>
  )
}

export default Home
