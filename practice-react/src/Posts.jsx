import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts(){

    const url = 'https://jsonplaceholder.typicode.com/posts'

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch(url).then(r=>r.json()).then(data=>setPosts(data))
    },[])

    return(
        <div className="box">
            <h1>Posts: </h1>
            <div style={{
                height: '300px',
                overflow: 'scroll'
            }}>
                {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    )
}