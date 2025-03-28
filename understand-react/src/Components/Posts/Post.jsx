const Post = ({post}) =>{
    return (
        <div className="border-[1px] bg-cyan-100 mt-1 p-2">
            <p>Post title: {post.title}</p>
        </div>
    )
}
export default Post