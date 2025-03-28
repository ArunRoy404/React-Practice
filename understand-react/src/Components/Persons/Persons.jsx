import Person from "./Person"

const Persons = ({persons}) => {
    return (
        <div>
            {/* <Person name={'X'} hobby={"Gaming"}></Person>
            <Person name={'Y'} hobby={"Eating"}></Person>
            <Person name={'Z'} hobby={"Sleeping"}></Person> */}

            {
                persons.map(({id,name,hobby}) =><Person key={id} name={name} hobby={hobby}></Person>)
            }
        </div>
    )
}

export default Persons