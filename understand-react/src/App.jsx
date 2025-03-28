import './App.css'
import Persons from './Components/Persons/Persons'
import Products from './Components/Products/Products'


function App() {

  const persons = [
    { id: 1, name: 'X', hobby: 'Gaming'},
    { id: 2, name: 'Y', hobby: 'Eating'},
    { id: 3, name: 'Z', hobby: 'Sleeping'},
  ]

  return (
    <>
      <div>
        <h1>Understand React</h1>
        <Persons persons={persons}></Persons>
        <Products></Products>
      </div>
    </>
  )
}

export default App
