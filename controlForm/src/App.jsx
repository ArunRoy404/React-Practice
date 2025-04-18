import './App.css'

function App() {

  const handleForm = (e) =>{
    e.preventDefault()
    console.log(e.target.name.value)
    e.target.name.value = ''
  }
  

  return (
    <>
      <div>
        <form action="" onSubmit={handleForm}>
          <input type="text" name='name' />
          <button>submit</button>
        </form>
      </div>
    </>
  )
}

export default App
