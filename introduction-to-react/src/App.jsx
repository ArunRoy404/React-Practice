import Todo from './todo'
import Actor from './Actor'
import Bird from './Birds'
import './App.css'
import { useState } from 'react'

const defaultStyle = {
  margin: '10px',
  border: '2px solid cyan',
  borderRadius: '20px',
  padding: '20px'
}

function App() {

  const greet = () =>{
    alert('Hello World!')
  }

  const greet3 = (parm) => alert(`The parameter is: ${parm}`)

  const actors = ['x', 'y', 'z']
  const birds = [
    {id:1, name: 'magpie', color: 'black'},
    {id:2, name: 'tiya', color: 'green'},
    {id:3, name: 'eagle', color: 'brown'},
  ]


  return (
    <>
      <h1>React Basic Components</h1>

      {/* event handler  */}
      <button onClick={greet}>greet</button>
      <button onClick={()=>{alert("hello World! 2")}}>Greet 2</button>
      <button onClick={()=>{greet3("HEHE")}} >Greet 3 with parm</button>


    



      {
        birds.map(bird => <Bird key={bird.id} name={bird.name} color={bird.color}></Bird>)
      }
      

      {/* {
        actors.map(actor=> <Actor name={actor}></Actor>)
      } */}

      {/* <Person></Person>
      <Person></Person>*/}
      <Person></Person> 

      <Developer name="x" tech="c++"></Developer>
      <Developer name='y' tech='python'></Developer>

      <Phone brand='apple' price='100000' ></Phone>
      <Player game='football' name='neymar' ></Player>

      <Salami event='eid' amount='500'></Salami>
      <Salami event='eid'></Salami>
      <Todo task='run 10km a day' isDone={true} time='100'></Todo>
      <Todo task='learn webDev' isDone={false}></Todo>
      <Todo task='learn react' isDone={true} time='160'></Todo>
    </>
  )
}

function Salami({ event, amount = 'no taka no salami' }) {
  return (
    <div style={{
      border: '2px solid blue',
      margin: '10px',
      borderRadius: '20px'
    }}>
      <p>Event: {event}</p>
      <p>Money: {amount}</p>
    </div>
  )
}


function Player({ game, name }) {
  return (
    <div style={defaultStyle}>
      <p>Game: {game}</p>
      <p>Player Name: {name}</p>
    </div>
  )
}

function Person() {
  return (
    <div className='person'>
      <p title='tooltip'>This is a person</p>
      <p style={{
        color: 'cyan',
        textAlign: 'left'
      }}>This style here is used directly</p>
    </div>
  )
}

function Developer(props) {
  const devStyle = {
    border: '2px solid green',
    margin: '10px',
    borderRadius: '20px'
  }
  return (
    <div style={devStyle}>
      <h3>Name: {props.name}</h3>
      <h3>Tech: {props.tech}</h3>
    </div>
  )
}

function Phone(props) {
  // console.log(props)
  // props.brand = 'samsung'     props is read only , cant change value
  // console.log(props)
  const phone = {
    border: '2px solid purple',
    margin: '10px',
    padding: '10px',
    borderRadius: '40px'
  }
  return (
    <div style={phone}>
      <p>brand: {props.brand}</p>
      <p>price: {props.price}</p>
    </div>
  )
}

export default App
