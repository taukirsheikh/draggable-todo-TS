
import { Todo } from "../model"
import { AiOutlineCheck, AiFillEdit, AiFillDelete } from 'react-icons/ai'
import './style.css'
import React, { useState, useRef, useEffect } from 'react'
type Props = {
    task: Todo;
    allTask: Todo[];
    setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTask = ({ task, allTask, setAllTask }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTask, setEditTask] = useState<string>(task.todo)

    const handleDone = (id: number) => {

        setAllTask(allTask.map((task) => task.id === id ? { ...task, isDone: !task.isDone } : task))


    }

    const handleDelete = (id:number) => {

        setAllTask(allTask.filter((task) => task.id !== id));

    }

    const handleEdit=(e :React.FormEvent,id:number)=>{
        e.preventDefault();
        setAllTask(allTask.map((task)=>(
            task.id===id ?{...task,todo:editTask}:task
        )))

        setEdit(false)

    }

    const inputRef=useRef<HTMLInputElement>(null)
useEffect(()=>{
    inputRef.current?.focus()
   
},[edit])
    return (
        <form className="allTask__single" onSubmit={(e)=>handleEdit(e,task.id)}>
            {
                edit ? (
                    <input
                    ref={inputRef}
                     value={editTask}
                      onChange={(e)=>setEditTask(e.target.value)}/>

                ) : (


                    task.isDone ? (

                        <s className="allTask__single--text ">{task.todo}</s>
                    ) :
                        (

                            <span className="allTask__single--text ">{task.todo}</span>
                        )

                )

            }
            <div className='icon__container'>

                <span className='icon' onClick={() => {

                    if (!edit && !task.isDone) {
                        setEdit(!edit)
                    }
                }}><AiFillEdit /></span>
                <span className='icon' onClick={() => handleDelete(task.id)}><AiFillDelete /></span>
                <span className='icon' onClick={() => handleDone(task.id)}> <AiOutlineCheck /></span>
            </div>


        </form>

    )
}
export default SingleTask;