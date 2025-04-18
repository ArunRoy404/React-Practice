import { useRef, useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {

  const handleForm = (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
    e.target.name.value = ''
  }
  
  const btn2Ref = useRef('null')
  const handleForm2 = () => {
    console.log(btn2Ref.current.value)
  }

  const [name, setName] = useState('hello')
  console.log(name)
  
  const handleForm3 =(e)=>{
    e.preventDefault()
    setName('ok')
  }

  return (
    <>
      <div>
        <form action="" onSubmit={handleForm}>
          <input type="text" name='name' />
          <button>submit</button>
        </form>
      </div>

      <div style={{ marginTop: '30px', border: '2px solid red' }}>
        <h3>Access value by useRef</h3>
        <input type="text" ref={btn2Ref} />
        <button onClick={handleForm2} >submit</button>
      </div>

      <form action="" onSubmit={handleForm3}>
        <div style={{ marginTop: '30px', border: '2px solid red' }}>
          <h3>input value onChange</h3>
          <input
            type="text"
            name='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <button>submit</button>
        </div>
      </form>

      <Posts></Posts>
    </>
  )
}

export default App
