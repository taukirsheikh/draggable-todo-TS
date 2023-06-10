import React from 'react'
import './style.css'
import { Todo } from '../model'
import SingleTask from './SingleTask.tsx'
interface Props{
    allTask:Todo[];
    setAllTask:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC <Props> = ({allTask, setAllTask}) => {
  return (
    <div className="tasklist">{
        allTask.map(task=>(
            <SingleTask task={task} key={task.id} allTask={allTask}
            setAllTask={setAllTask}/>
        ))
    }</div>
  )
}

export default TodoList