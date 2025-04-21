import { useState } from 'react'
import './App.css'
import Child from './components/Child/Child'

function App() {

  const [value, setValue] = useState(0)

  const handleIncrement = () => {
    // setValue(value+1)
    // setValue(value+1)
    // setValue(value+1)
    // setValue(value+1)
    // setValue(value+1)

    setValue(preValue => preValue + 1)
    setValue(preValue => preValue + 1)
    setValue(preValue => preValue + 1)
    setValue(preValue => preValue + 1)
    setValue(preValue => preValue + 1)

  }

  const [isUnmount, setIsUnmount] = useState(false)

  const [isRemove, setIsRemove] = useState(false)

  return (
    <div>
      <h1>Component Life Cycle</h1>

      <div>
        <h3>How useState works</h3>
        <p>if multiple of setState is defined one by one , then all the setState is
          <br /> queued in call back queue, and is executed at once. <br />
          since the value was 0. all the setState will take the value 0 and increment it.

          <br />
          <br />
          so in order to execute multiple setState we have to use a parameter and a call back function
        </p>
        <h4>value: {value}</h4>
        <button onClick={handleIncrement}>increment</button>
      </div>

      {isUnmount ?<h1 style={{color:'red'}}>Child unMounted</h1> :<h1>Child Mounted</h1>}
      <button onClick={()=>setIsRemove(!isRemove)} >{isRemove ?'show child' :'remove child'}</button>
      {isRemove || <Child setIsUnmount={setIsUnmount}></Child>}
    </div>
  )
}

export default App
