import React from 'react'
import './style.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}

const InputFeild:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    
// const InputFeild = ({todo, setTodo} :Props) => {
  return (
    <form className='input' onSubmit ={handleAdd}>
        <input type='input' placeholder='Enter the task' className='input__box' 
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}/>
        <button className='input__submit' type="submit">GO</button>
   

    </form>
  )
}

export default InputFeild
