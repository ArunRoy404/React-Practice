import { use } from "react"
import Post from "./Post"
const Posts = ({ fetchPosts }) => {
    const posts = use(fetchPosts)

    return (
        <div>
            <h2 className="text-2xl font-bold">Total Post: {posts.length}</h2>
            <div className="h-[300px] overflow-scroll p-2">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    )
}
export default Posts