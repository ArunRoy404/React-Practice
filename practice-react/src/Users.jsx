import { use } from "react"
import User from "./User"

export default function Users({fetchUser}){
    const users = use(fetchUser)
    
    
    return(
        <div style={{
            height:'300px',
            overflow: 'scroll'
        }}>
            <h2>User</h2>
            {
                users.map(user=>{
                    return <User key={user.id} user={user}></User>
                })
            }
        </div>
    )
}

