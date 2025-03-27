import Counter from './Counter'
import ShowText from './ShowText'
import Users from './Users'
import './App.css'
import { Suspense } from 'react'


const getUserResponse = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users#')
  return response.json()
}


function App() {
  const fetchUser = getUserResponse()
  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <h2>Task 1</h2>
        <Counter></Counter>
      </div>

      <div>
        <h2>Task 2</h2>
        <ShowText></ShowText>
      </div>

      <div>
        <h2>Task 3</h2>
        <div className='box'>
          <Suspense fallback={<h2>Users Loading...</h2>}>
            <Users fetchUser={fetchUser} ></Users>
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default App
