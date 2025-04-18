import { useRef } from 'react'
import './App.css'

function App() {

  const handleForm = (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
    e.target.name.value = ''
  }

  const btn2Ref = useRef(null)
  const handleForm2 = () =>{
    console.log(btn2Ref.current.value)
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
    </>
  )
}

export default App
