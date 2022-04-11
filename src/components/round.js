import React from "react";
import './round.css';

const Round = ({zurhai}) => {
    console.log(zurhai)
    return <div style={{ "display": "flex", "flexDirection" : "row"}}>
            <div style={{margin: '20px', borderRadius: "50%", "displey" : 'flex'}}  className='cont flex'>
                <div className='square'></div>
                <div style={{"display" : "flex", "flexDirection" : "column" }}>
                    <h3 className='upperText'>COLOR</h3>
                    <h3 className='lowerText' style={{"color": zurhai?.color}}>{zurhai?.color}</h3>
                </div>
            </div>
            <div style={{margin: '20px', borderRadius: "50%", "displey" : 'flex', "flexDirection" : "row"}}  className='cont flex'>
                <div className='square'></div>
                <div style={{"display" : "flex", "flexDirection" : "column" }}>
                    <h3 className='upperText'>LUCKY TIME</h3>
                    <h3 className='lowerText' style={{"color": '#96E27B'}}>{zurhai?.lucky_time}</h3>
                </div>
            </div>
            <div style={{margin: '20px', borderRadius: "50%", "displey" : 'flex', "flexDirection" : "row"}}  className='cont flex'>
                <div className='square'></div>
                <div style={{"display" : "flex", "flexDirection" : "column" }}>
                    <h3 className='upperText'>LUCKY NUMBER</h3>
                    <h3 className='lowerText' style={{"color": '#AD7A4B', marginLeft: "25px"}}>{zurhai?.lucky_number}</h3>
                </div>
            </div>
            <div style={{margin: '20px', borderRadius: "50%", "displey" : 'flex', "flexDirection" : "row"}}  className='cont flex'>
                <div className='square'></div>
                <div style={{"display" : "flex", "flexDirection" : "column" }}>
                    <h3 className='upperText' style={{marginLeft: '30px'}}>MOOD</h3>
                    <h3 className='lowerText' style={{"color": '#74CCBC'}}>{zurhai?.mood}</h3>
                </div>
            </div>
            <div style={{margin: '20px', borderRadius: "50%", "displey" : 'flex', "flexDirection" : "row"}}  className='cont flex'>
                <div className='square'></div>
                <div style={{"display" : "flex", "flexDirection" : "column" }}>
                    <h3 className='upperText'>COMPATIBILITY</h3>
                    <h3 className='lowerText' style={{"color": '#C65858'}}>{zurhai?.compatibility}</h3>
                </div>
            </div>
    </div>
}

export default Round;