export default function Todo({task, isDone}){
    return (
        <li>{(isDone)?'Done':'Do'}: {task}</li>
    )
}