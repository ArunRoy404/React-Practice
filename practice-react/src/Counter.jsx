import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className="box">
            <h1>Run: {count}</h1>
            <div style={
                {
                    display: 'flex',
                    gap:'10px',
                    justifyContent: 'center'

                }
            }>
                <button onClick={()=>setCount(count+1)} >+1</button>
                <button onClick={()=>setCount(count-1)} >-1</button>
                <button onClick={()=>setCount(0)} >reset</button>
            </div>
        </div>
    )
}