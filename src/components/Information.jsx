import '../App.css';

import bubble_tea_icon from '../assets/bubble_tea_icon.png'

const Information = () => {
    return (
        <div className="topnav">
            
            <img src={bubble_tea_icon} width="100" height="100" />

            <a href='/'>Home</a>
            <a href='/history'>History</a>
            {/* <a href='/brands'>Brands</a>
            <a href='/myrecommendations'>My Recommendations</a> */}

        </div>
    );
}

export default Information;