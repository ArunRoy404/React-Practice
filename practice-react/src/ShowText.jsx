import { useState } from "react"

export default function ShowText() {

    const [state, setState] = useState(false)

    return (

        <div className="box">
            <div style={
                {
                    height: '50px'
                }
            }>
                {
                    (state) && <h2>Hello! React Learners.</h2>
                }
            </div>

            <button onClick={() => { setState(!state) }}>{(!state) ? 'Show' : 'Hide'}</button>
        </div>
    )
}