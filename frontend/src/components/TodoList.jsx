import React from "react";
import Todo from "./Todo";
import { deleteTodo, updateTodo, updateTodoStatus } from "../lib/todos";
import {toast} from 'react-toastify'

const TodoList = ({ todos, setTodos,loading }) => {
  const handleStatusChange = async (value, id) => {
    try {
      const sendReq = await updateTodoStatus(id, value);

      if (sendReq.status === 200) {
        const update = todos.map((item) => {
          if (item.Id === id) {
            return { ...item, status: value };
          } else {
            return item;
          }
        });
        setTodos(update);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async(id)=>{
    try {
      const sendReq =await deleteTodo(id);
      if(sendReq.status===200){
        const filter = todos.filter(item=>{
          if(item.Id !== id){
            return item;
          }
        })
        setTodos(filter);
        toast.success('Todo Deleted!',{
          position:'top-center',
          autoClose:1000,
          style:{backgroundColor:'#63e',color:'white'}
        })

      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleEditTodo = async (id,value)=>{
    try {
      console.log(id);
        const sendReq =await updateTodo(id,value);

        if(sendReq.status===200){
          const update = todos.map(item=>{
            if(item.Id === id){
              return {...item,todo:value}
            }else{
              return item;
            }
          })
          setTodos(update);
        }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-center mt-5">
      <div className=" md:w-1/2 w-full rounded-lg border-gray-600 border-2 divide-y-2">

        {loading ? '...' : todos.length ? todos.map((item) => {
          return (
            <Todo
            handleEditTodo={handleEditTodo}
              handleDeleteTodo={handleDeleteTodo}
              handleStatusChange={handleStatusChange}
              key={item.Id}
              todo={item}
            />
          );
        }) : <p className="text-3xl text-center p-5 underline">Please Add Some Todos...</p>}
      </div>
    </div>
  );
};

export default TodoList;
