import React from 'react'
import './style.css'
import { Todo } from '../model'
import SingleTask from './SingleTask.tsx'
interface Props {
    allTask: Todo[];
    setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
    completed:Todo[];
    setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ allTask, setAllTask }) => {
    return (
        <div className="container">
            <div className="tasklist">
                <span className="tasklist__heading">
                    Active Tasks
                </span>
                {
                    allTask.map(task => (
                        <SingleTask
                            task={task}
                            key={task.id}
                            allTask={allTask}
                            setAllTask={setAllTask} />
                    ))
                }</div>
            <div className="tasklist remove">
            <span className="tasklist__heading">
                    Completed task
                </span>
                {
                    allTask.map(task => (
                        <SingleTask
                            task={task}
                            key={task.id}
                            allTask={allTask}
                            setAllTask={setAllTask} />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList