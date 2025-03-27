export default function User({user}){
    const {name,company,address} = user
    return(
        <div className="box">
            <p>name: {name}</p>
            <p>company: {company.name}</p>
            <p>city: {address.city}</p>
        </div>
    )
}