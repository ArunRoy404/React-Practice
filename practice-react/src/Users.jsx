import { use } from "react"
import User from "./User"

export default function Users({fetchUser}){
    const users = use(fetchUser)
    console.log(users)
    
    
    return(
        <div style={{
            height:'300px',
            overflow: 'scroll'
        }}>
            <h2>User</h2>
            {
                users.map(user=>{
                    return <User user={user}></User>
                })
            }
        </div>
    )
}

