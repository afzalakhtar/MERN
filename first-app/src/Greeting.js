import { useState } from 'react';
import './Greeting.css'

function Greeting({name}) {
    const d = new Date(), greet = ['Morning', "After Noon", "Evening", 'Night'];
    let getTime = d.getHours();


    let [grMsg, setMsg] = useState(null)

    console.log({getTime});

    if(getTime < 12){
        grMsg = greet[0]
    }else if(getTime < 15){
        grMsg = greet[1]
    }else if(getTime < 20){
        grMsg = greet[2]
    }else{
        grMsg = greet[3]
    }

    return (
        <div className='greeting'>

            <h1>Good {grMsg} {name}</h1>

        </div>
    )
}

export default Greeting;