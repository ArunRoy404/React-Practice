import { useState } from "react";
import './App.css'
export default function Counter() {
    const [count, setCount] = useState(0)

    const handleCounter = () => {
        setCount(count + 1)
    }

    return(
        <div className="box">
            <h1>{count}</h1>
            <button onClick={handleCounter}>Count</button>
        </div>
    )
}