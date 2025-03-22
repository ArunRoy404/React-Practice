import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
    <p>This is a person</p>
  )
}

function Developer() {
  return (
    <div>
      <h3>Name: </h3>
      <h3>Tech: </h3>
    </div>
  )
}

export default App
