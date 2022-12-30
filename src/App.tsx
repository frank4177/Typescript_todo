import React, { useState } from "react";
import "./App.css";
import InputField from "./components/inputField/inputField";
import TodoList from "./components/todoList/todoList";
import { Todo } from "./model";

const App: React.FC = ()=> {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

console.log(todos)
  const handleAdd =(e: React.FormEvent)=>{
    e.preventDefault()

    if(todo){
      setTodos([...todos, {id: Date.now(), title: todo, isDone: false}])
    }   
  }

  return (
    <div className="App">
      <div className="container">
        <h2 className="title">TASKILO</h2>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
