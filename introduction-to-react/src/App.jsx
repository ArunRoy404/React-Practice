import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>

      <Developer></Developer>
      <Developer></Developer>
    </>
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

function Developer() {

  const devStyle = {
    border: '2px solid green',
    margin: '10px',
    borderRadius: '20px'
  }

  return (
    <div style={devStyle}>
      <h3>Name: </h3>
      <h3>Tech: </h3>
    </div>
  )
}

export default App
