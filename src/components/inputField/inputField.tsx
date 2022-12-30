import React from "react";
import "./inputField.css";

interface TodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent)=> void;
}

const InputField: React.FC<TodoProps> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form onSubmit={handleAdd} className="inputField--form">
      <input type="text" placeholder="Enter a task" 
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default InputField;
