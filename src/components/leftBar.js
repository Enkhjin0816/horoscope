import { useState } from "react"
import { CheckTile } from "./checkTile"
import { Rocket } from "./rocket"
import './leftBar.css'
import DropDown from "./dropDown"
import './button.css';

export const LeftBar = () => {
    const [toggle, setToggle] = useState(false);
    const [signdata, setSignData] = useState('')
    const [day, setDayData] = useState('')
    return (
        <div className="left-bar-container">
            <div style={{height: '850px', width: '400px'}}>
                {toggle ?
                <div>
                    <div className="check-tile-container">
                        <CheckTile title={"ALL SYSTEMS CHECK"} />
                        <CheckTile title={"RENDEZVOUS BURN SLOW"} />
                        <CheckTile title={"PREPARE RENDEZVOUS BURN"} />
                        <CheckTile title={"THERMAL SHIELD"} iconColor={"#40C110"} status={"Applied"} />
                        <CheckTile title={"BURN GO/NO-GO"} />
                        <CheckTile title={"POWER COMPLETION"} iconColor={"#EA7B15"} status={"Awaiting"} />
                        <CheckTile title={"STATION DECK CHECK"} />
                    </div>
                </div> :
                <div>
                    <Rocket />
                </div>
            }

            </div>

            <div className='buttons'>
                <button className={toggle ? 'button-white' : 'button-blue'} onClick={() => setToggle(!toggle)}>SYSTEMS</button>
                <button className={toggle ? 'button-blue' : 'button-white'} onClick={() => setToggle(!toggle)}>CABIN</button>
            </div>
        </div>
    )
}