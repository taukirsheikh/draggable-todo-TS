import React,{useRef} from 'react'
import './style.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}

const InputFeild:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    
// const InputFeild = ({todo, setTodo} :Props) => {
    const inputRef=useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit ={(e)=>{

        handleAdd(e) 
        inputRef.current?.blur}}>
    
        <input type='input' placeholder='Enter the task' className='input__box' 
        value={todo}
        ref={inputRef}
        onChange={(e)=>setTodo(e.target.value)}/>
        <button className='input__submit' type="submit">GO</button>
   

    </form>
  )
}

export default InputFeild
