import React, { useEffect, useState } from 'react';

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [state, setState] = useState(false)

    const handleLoadPost = () => {
        setState(!state)
    }
    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        if (state) {
            fetch(url).then(res => res.json()).then(data => setPosts(data))
        }
    }, [state])

    return (
        <div>
            <div style={{ marginTop: '30px', border: '2px solid red' }}>
                <h1>Posts: {posts.length}</h1>
                <button onClick={handleLoadPost} >Load Posts</button>
            </div>
        </div>
    );
};

export default Posts;