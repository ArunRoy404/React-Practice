export default function Todo({task, isDone, time = 0}){
    // return (
    //     <li>{(isDone)?'Done':'Do'}: {task}</li>
    // )

    // return (isDone)
    //             ? <li>Done: {task} time: {time}</li>
    //             : <li>Pending: {task}</li>

    // if(isDone){
    //     return null
    // }
    // return <li>Task: {task}, time: {time} </li>

    // return isDone && <li>Task: {task}, time: {time} </li>
    // return !isDone && <li>Task: {task}, time: {time} </li>

    // return isDone || <li>Task: {task}, time: {time} </li>
    // return !isDone || <li>Task: {task}, time: {time} </li>

    return <li>Task: {task}, time: {time? 'I am done': 'Not done yet'} </li>
}