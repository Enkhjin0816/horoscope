import React from "react";
import './dropDown.css';

const DropDown = ({ setSign, setDate, sign, date }) => {
    return (
        <div className='sign'>
            <div>
                <h1 className='btext'>SIGN</h1>
                <select value={sign} className='options' onChange={(e) => setSign(e.target.value)}>
                    <option>Aries</option>
                    <option>Taurus</option>
                    <option>Gemini</option>
                    <option>Cancer</option>
                    <option>Leo</option>
                    <option>Virgo</option>
                    <option>Libra</option>
                    <option>Scorpio</option>
                    <option>Sagittarius</option>
                    <option>Capricorn</option>
                    <option>Aquarius</option>
                    <option>Pisces</option>
                </select>
            </div>
            <div>
                <h1 className='btext2'>DATE</h1>
                <select value={date} className='options sign2' onChange={(e) => setDate(e.target.value)}>
                    <option>Today</option>
                    <option>Yesterday</option>
                    <option>Tomorrow</option>
                </select>
            </div>

        </div>
    )
}

export default DropDown;