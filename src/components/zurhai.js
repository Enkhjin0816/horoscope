import React, { useEffect, useState } from "react";
import axios from 'axios'
import Round from "./round";

const Zurhai = ( {date, sign } ) => {
    const [zurhai, setZurhai] = useState()
    useEffect(() => {
        const options = {
            method: 'POST',
            url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
            params: {sign: sign, day: date},
            headers: {
              'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
              'x-rapidapi-key': '41d9f3ec2bmsh0deceec67d168ddp19bdccjsnccadb20f7e8f'
          }
          };
          
          axios.request(options).then(function (response) {
            console.log(response)
            setZurhai(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    },[])

    console.log(zurhai)

    return <div style={{display: 'flex', flexDirection: 'row', height: '100%', width: '100%', }}>
      <Round zurhai={zurhai}/>
    </div>
}

export default Zurhai;