import React, { useState } from "react";
import "./singleTodo.css";
import { RiDeleteBinLine, RiEdit2Fill, RiCheckFill } from "react-icons/ri";
import { Todo } from "../../model";

interface Props {
  todoItem: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todoItem, todos, setTodos }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>('');
  const [todoID, setTodID] = useState<number>();


  const handleDelete = (id: number) => {
    const deleteThisTodo = todos.filter((item) => item.id !== id);
    setTodos(deleteThisTodo);
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };


  const handleEditClick = (todoedit: Todo) => { 
    setEditMode(!editMode)
    setEditTodo(todoedit.title)
    setTodID(todoedit.id)
  };


  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTodos(
        todos.map((item) =>
          item.id === todoID ? { ...item, title: editTodo } : item
        )
      );
      setEditMode(false)
  };

  

  return (
    <div className="singleTodo">
      {editMode ? (
        <form action="" onSubmit={handleEditSubmit}>
        <input defaultValue={editTodo} type="text" onChange={(e)=> setEditTodo(e.target.value)} autoFocus/>
        </form>
      ) : (
        <div className={`${todoItem.isDone === true && "strike"}`}>
          {todoItem.title}
        </div>
      )}
      <div className="actionWrap">
        <RiEdit2Fill className="icon" onClick={() => handleEditClick(todoItem)} />
        <RiDeleteBinLine
          className="icon"
          onClick={() => handleDelete(todoItem.id)}
        />
        <RiCheckFill className="icon" onClick={() => handleDone(todoItem.id)} />
      </div>
    </div>
  );
};

export default SingleTodo;
