export default function User({user}){
    // console.log(user)
    return(
        <div className="box">
            <h2>ok</h2>
            <h3>Name: {user.name}</h3>
            <h3>email: {user.email}</h3>
        </div>
    )
}