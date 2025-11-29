import { useState } from "react"
import './App.css'

export default function Batsman() {
    const [runs, setruns] = useState(0);

    const handleDot = () => {
        const updatedRuns = runs + 0;
        setruns(updatedRuns);
    }
    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setruns(updatedRuns);
    }
    const handleDouble = () => {
        const updatedRuns = runs + 2;
        setruns(updatedRuns);
    }
    const handleTriple = () => {
        const updatedRuns = runs + 3;
        setruns(updatedRuns);
    }
    const handlefour = () => {
        let updatedRuns = runs + 4;
        setruns(updatedRuns);
    }
    const handleSix = () => {
        let updatedRuns = runs + 6;
        setruns(updatedRuns);
    }

    return (
        <div className="use">
            <h2>Player : Sakib Al-Hasan</h2>
            {
                runs > 49 && <p>Congress!! you made a 50</p>
            }
            {
                runs>99 && <p>Congress !! You made 100</p>
            }
            <h3>Score : {runs}</h3>
            <div className="btn">
                <button onClick={handleDot}>Dot</button>
                <button onClick={handleSingle}>Single</button>
                <button onClick={handleDouble}>Double</button>
                <button onClick={handleTriple}>Triple</button>
                <button onClick={handlefour}>Four</button>
                <button onClick={handleSix}>Six</button>
            </div>
        </div>
    )
}