import '../App.css'

import './Styles/History.css'


import { Canvas } from '@react-three/fiber';

import { Environment, OrbitControls } from '@react-three/drei';
import { Test } from './Test.jsx';

import { Suspense } from 'react';

//images
import bubble_tea_image from '../assets/Bubble_tea_history.jpg';



const History = () => {
    return (
    <>
    <div className='heading'>
    <h1>How Did Bubble Tea Came to Be?</h1>

    <img src={bubble_tea_image}/>
    
    </div>

    


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
    Therefore, bubble tea was born.

    It has been popular through worldwide and Asia
    </p>

    </section>

    </>
    );
}

export default History;