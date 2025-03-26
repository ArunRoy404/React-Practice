import { useEffect, useState } from "react"

export default function Players(){

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(r=>r.json())
        .then(data=>setPlayers(data))
    },[])

    return(
        <div className="box">
            <h2>Players</h2>
            <ol>
                {
                    players.map(player=>{
                        return <li key={player.id} >{player.name}</li>
                    })
                }
            </ol>
        </div>
    )
}