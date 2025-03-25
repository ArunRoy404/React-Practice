import { useState } from "react"

export default function Batsman (){
    const [run, setRun] = useState(0)
    const [four, setFour] = useState(0)
    const [six, setSix] = useState(0)

    const handleRun = (newRun) => {
        if (newRun === 4) setFour(four+1)
        if (newRun === 6) setSix(six+1)
        setRun(run + newRun)
    }



    return (
        <div className="box">
            {
                (run>=50) && <p>Congratulations for 50 Run</p>
            }
            <h1>Total Run: {run}</h1>
            <h3>Total Four: {four}</h3>
            <h3>Total Six: {six}</h3>
            

            <div>
                <button onClick={() => { handleRun(1) }}>singles</button>
                <button onClick={() => { handleRun(4) }}>four</button>
                <button onClick={() => { handleRun(6) }}>six</button>
            </div>

        </div>
    )

}