import React, { useState } from "react";
import DeleteIcon from "./DeleteIcon";

const Todo = ({ todo, handleStatusChange, handleDeleteTodo,handleEditTodo }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div
      onMouseOver={() => {
        setShowDelete(true);
      }}
      onMouseLeave={() => {
        setShowDelete(false);
      }}
      className="flex gap-5 p-3 items-center"
    >
      <input
        onChange={(e) => handleStatusChange(e.target.checked, todo.Id)}
        className="md:w-[4%] h-5 mt-1 bg-white  checked:bg-[#63e] rounded-[50%] appearance-none cursor-pointer"
        type="checkbox"
        defaultChecked={todo.status}
      />
      {!showEdit ? (
        <p onDoubleClick={() => setShowEdit(true)} className="md:w-[80%]">
          {todo.status ? (
            <span className="line-through text-[#63e] ">{todo.todo}</span>
          ) : (
            todo.todo
          )}
        </p>
      ) : (
        <input autoFocus onBlur={async (e) => {
          await handleEditTodo(todo.Id,e.target.value);
          setShowEdit(false)
        }} className="w-full bg-transparent outline outline-gray-500 outline-2 rounded p-2" defaultValue={todo.todo} />
      )}
      <div className="w-[30%] flex items-center justify-end">
        <button
          onClick={() => handleDeleteTodo(todo.Id)}
          className={`md:w-[20%]  hover:fill-[#63e]  h-8 transition-all  bg-white  rounded-lg ${
            showDelete ? "opacity-100" : "opacity-0"
          }`}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default Todo;
