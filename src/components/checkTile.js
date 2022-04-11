import { CheckIcon } from "../icons/checkIcon"
import MaterialIcon from 'react-google-material-icons'
import './check.css'

export const CheckTile = (props) => {
    return (
        <div style={{display: "flex", flexDirection: 'column', justifyContent: 'space-around', marginTop: "30px"}}>
            <div style={{ display: "flex", flexDirection: 'row', alignContent: 'flex-start'}}>
                    <CheckIcon color={props.iconColor}/>
                <div>
                    <div className="check-text">{props.title}</div>
                    <p className={props.status ? "status white" : "status"}>{props.status ? props.status : "Normal"}</p>
                </div>
            </div>
        </div>
    )
}