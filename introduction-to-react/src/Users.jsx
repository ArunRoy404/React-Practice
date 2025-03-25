import { use } from "react"
import User from "./User"

export default function Users({fetchUsers}){
    const users = use(fetchUsers)
    // console.log(users)
    return(
        <div className="user-box">
            <h1>Users: {users.length}</h1>
            {
                users.map(user => {
                    return <User key={user.id} user={user}></User>
                })
            }
        </div>
    )
}