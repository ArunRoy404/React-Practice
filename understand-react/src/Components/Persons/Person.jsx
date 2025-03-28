import './person.css'

const Person = ({name, hobby}) =>{
    return(
        <div className='person'>
            <p>Name: {name}</p>
            <p>Hobby: {hobby}</p>
        </div>
    )
}

export default Person