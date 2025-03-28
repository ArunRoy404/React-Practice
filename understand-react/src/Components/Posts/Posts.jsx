import { use } from "react"
import Post from "./Post"
const Posts = ({ fetchPosts }) => {
    const posts = use(fetchPosts)

    const data = () =>{
        return posts.map(post => <Post key={post.id} post={post}></Post>)
    }

    return (
        <div>
            <h2 className="text-2xl font-bold">Total Post: {posts.length}</h2>
            <div className="h-[300px] overflow-scroll p-2">
                {
                    data()
                }
            </div>
        </div>
    )
}
export default Posts