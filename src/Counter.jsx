import { useState } from 'react'
import './App.css'
export default function Counter() {
    const [counts, setCounts] = useState(0);
    const handleAdd = () => {
        const updatedCounts = counts + 1;
        setCounts(updatedCounts);
    }
    const handleMinus = () => {
        const updatedCounts = counts - 1;
        setCounts(updatedCounts);
    }
    const handleReset = () => {
        const updatedCounts = counts - counts;
        setCounts(updatedCounts);
    }


    return (
        <div className='use'>
            <h1>Score : {counts}</h1>
            <div>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleMinus}>Minus</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )

}