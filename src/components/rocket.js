import React from "react";
import './rocket.css';
import spacex from '../assets/spacex.png'

export const Rocket = () => {
    return (
        <div>
            <img alt='rocket' src={spacex}/>
            <div className='rocket'></div>
        </div>
    )
}