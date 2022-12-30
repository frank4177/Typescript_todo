import React from "react";
import { Todo } from "../../model";
import SingleTodo from "../singleTodo/singleTodo";
import "./todoList.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      {todos.map((todoItem, index) => (
        <div  className="tList" key={index}>
          <SingleTodo todoItem={todoItem} todos={todos} setTodos={setTodos}/>
        </div>
      ))}
    </>
  );
};

export default TodoList;
