import '../App.css'

import './Styles/History.css'


import { Canvas } from '@react-three/fiber';

import { Environment, OrbitControls } from '@react-three/drei';
import { Test } from './Test.jsx';

import { Suspense } from 'react';

//images
import bubble_tea_image from '../assets/Bubble_tea_history.jpg';

import background_image from '../assets/taiwan-milk-tea-with-bubble.jpg';


const History = () => {
    return (
    <body className='history_section'>
    

    <h1>History About the Beloved drink</h1>
    <p className='subtitle'>Origins, Global Phenomenon, Modern Day</p>



    <div className='information_section_history'>

    <h1>Origins: 1980s</h1>
    <p>
        One popular story is that Lin Hsiu Hui, the owner of the Chun Shui Tang teahouse in Taichung, 
        invented bubble tea by adding tapioca pearls to iced milk tea, inspired by her desire to offer something new to customers.
        </p>
        <p>
        Another claim is from Liu Han-Chieh, the founder of the Hanlin Tea Room,
        who reportedly invented bubble tea by combining tapioca balls with iced tea.
    </p>
    </div>

    <div className='information_section_history'>
    
    <h1>Global Phenomenon: 2000s</h1>
    <p>
    Bubble tea began to spread beyond Taiwan in the 1990s. Its unique combination of flavors, textures, and playful appeal drew international attention.
    By the early 2000s, bubble tea shops opened in Hong Kong, Japan, and Southeast Asia.
    </p>
    <p>
    The United States saw a boom in bubble tea shops in cities like Los Angeles and New York in the mid-2000s, making it a global phenomenon.
    Today, bubble tea is enjoyed worldwide, with variations popping up in many countries, often incorporating local flavors and ingredients.
    </p>
 
    </div>
    
    <div className='information_section_history'>

    <h1>Cultural Influence: Present Day</h1>
    <p>
    Bubble tea has become not just a drink but a cultural symbol, especially in Taiwan and other parts of East Asia.
    </p>
    <p>
    It is often associated with youth culture, fashion, and socializing, with its wide variety of customization options, 
    such as different teas, toppings, and sweetness levels.
    </p>
    </div>


    </body>
    );
}

export default History;