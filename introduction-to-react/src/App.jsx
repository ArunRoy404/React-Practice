import { useState } from 'react'
import './App.css'

const defaultStyle = {
  margin: '10px',
  border: '2px solid cyan',
  borderRadius: '20px',
  padding: '20px'
}

function App() {
  return (
    <>
      <h1>React Basic Components</h1>
      {/* <Person></Person>
      <Person></Person>
      <Person></Person> */}

      <Developer name="x" tech="c++"></Developer>
      <Developer name='y' tech='python'></Developer>

      <Phone brand='apple' price='100000' ></Phone>
      <Player game='football' name='neymar' ></Player>

      <Salami event='eid' amount='500'></Salami>
      <Salami event='eid'></Salami>
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
      <p>This is a person</p>
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
