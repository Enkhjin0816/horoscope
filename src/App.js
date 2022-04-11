import "./App.css";
import { useState } from "react";
import logo from './assets/bg.png';
import { LeftBar } from "./components/leftBar";
import Zurhai from "./components/zurhai";
import DropDown from "./components/dropDown";

const App = () => {
  const [sign, setSign] = useState('Cancer');
  const [date, setDate] = useState('Today')
  const [toggle, setToggle] = useState(false);
console.log(date, sign)
  
  return (
    <div className="container">
      <LeftBar />
      <div style={{width: '1250px'}}>
        {toggle ?
          <div>
            <Zurhai sign={sign} date={date} /> 
          </div> :
          <div>
            <DropDown setSign={setSign} setDate={setDate} sign={sign} date={date}/>
          </div>
        }
      </div>
      {toggle ? <button onClick={() => setToggle(false)}>back....</button> : <button onClick={() => setToggle(true)}>.....</button>}  
    </div>
  )
}

export default App;