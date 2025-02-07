// import { useState } from 'react';
import './App.css';

import { Canvas } from '@react-three/fiber';

import Information from './components/Information.jsx';
import Home from "./components/Home.jsx";
import History from "./components/History.jsx";
import MyRecommendations from './components/MyRecommendations.jsx';
import Brands from './components/Brands.jsx';

import { Environment, OrbitControls } from '@react-three/drei';

import { Route, Routes } from 'react-router-dom';



//------//

function App() {  
  return (
    <>

    <Information/>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/history' element={<History />} />
      {/* <Route path='/brands' element={<Brands />} />
      <Route path='/myrecommendations' element={<MyRecommendations />}/> */}
    </Routes>
    

    </>
  )
}

export default App
