import { useState } from 'react'
import './App.css'
export default function (){
    const [balls, setballs] = useState(0);
    const handlefirst = () => {
        const updatedballs = balls + 1;
        setballs(updatedballs);
    }



    return(
        <div className='use'>
            <h1>Bowler : Mustafizur rahman</h1>
             {
                balls > 5 && <p>Your over is done. Change Bowler</p>
            }
            <h4>Balls : {balls}</h4>
            <div>
                <button onClick={handlefirst}> Balls</button>
              
            </div>
        </div>
    )
}