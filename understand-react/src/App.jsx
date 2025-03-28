import { Suspense } from 'react'
import './App.css'
import Persons from './Components/Persons/Persons'
import Posts from './Components/Posts/Posts'
import Products from './Components/Products/Products'

const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
const fetchPostsResponse = async () => {
  const response = await fetch(postsUrl)
  return response.json()
}

function App() {
  const fetchPosts = fetchPostsResponse()

  const persons = [
    { id: 1, name: 'X', hobby: 'Gaming' },
    { id: 2, name: 'Y', hobby: 'Eating' },
    { id: 3, name: 'Z', hobby: 'Sleeping' },
  ]

  return (
    <>
      <div>
        <h1>Understand React</h1>
        <Persons persons={persons}></Persons>
        <Products></Products>

        <div className="bg-gray-200 border-2 border-black mt-5 p-5">
          <Suspense fallback={<h2 className='text-2xl font-bold'>Posts Loading..........</h2>}>
            <Posts fetchPosts={fetchPosts}></Posts>
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default App
