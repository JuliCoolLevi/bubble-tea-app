import '../App.css'

import './Styles/History.css'

import { CosyPlace } from './CosyPlace.jsx';

import { Canvas } from '@react-three/fiber';

import { Environment, OrbitControls } from '@react-three/drei';




const History = () => {
    return (
    <div>

    <Canvas className='cosy_place'>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={2}/>
        <CosyPlace/>
    
    </Canvas> 
     
        
        
    <section className='information_section'>

    <h1>History</h1>

    <p>
    The owner of a tea store, Liu Han-Chieh, first came
    up with the idea of serving tea cold in the early 1980s.

    Tapioca balls, frequently known as "boba pearls" came at a 
    later time.
    </p>

    <p>
    Tu Tsong He, ran into debt and needed to find another idea
    to make money.

    He found tapioca balls and decided to use it with green tea.
    Therefore, bubble tea was meshStandardMaterial

    It has been popular through worldwide and Asia
    </p>

    </section>

    </div>
    );
}

export default History;