import './App.css'
export default function Bird({name, color}){
    return(
        <div className='bird'>
            <p>Name: {name}</p>
            <p>Color: {color}</p>
        </div>
    )
}