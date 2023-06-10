import React, {useState} from "react"
import './App.css'
import InputFeild from './components/InputFeild'
import { Todo } from "./model";
import TodoList from "./components/TodoList";
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  // const [todo, setTodo] = useState<string[] | number>("");
  const [allTask, setAllTask]=useState<Todo[]>([])
console.log(todo)
const handleAdd=(e : React.FormEvent)=>{
  e.preventDefault()
  if (todo){
    setAllTask([...allTask,{id:Date.now(),todo:todo, isDone:false}])
    setTodo("")
  }

};
console.log(allTask)


  return (
<>
    
      <div className='app'>
        <span className="heading">TASKIFY</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList allTask={allTask} setAllTask={setAllTask}/>
    
      </div>

</>
    

  )
}

export default App
