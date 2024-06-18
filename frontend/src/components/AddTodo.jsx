import React, { useState } from 'react'
import { postTodo } from '../lib/todos';
import { toast } from 'react-toastify';

const AddTodo = ({setTodos,downloadPDF,disabled}) => {

    const [todoInput,setTodoInput] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!todoInput){
            return;
        }

        const sendReq =await postTodo({todo:todoInput});
        if(sendReq.status===200){
            setTodos((current)=>[sendReq.data.data,...current,]);
            setTodoInput('');
            toast.success('Todo Added!',{
                position:'top-center',
                autoClose:500,
                style:{backgroundColor:'#63e',color:'white'}
            })
        }else{
            toast.error('Something Went Wrong!',{
                position:'top-center',
                autoClose:2000
            })
        }
    }
  return (
    <>
        <form className='sm:flex sm:flex-row sm:items-center sm:justify-center mt-10 gap-5 flex flex-col' onSubmit={handleSubmit}>

        <input value={todoInput} onChange={e=>setTodoInput(e.target.value)} className='bg-transparent outline outline-gray-500 outline-2 rounded p-2'/>

        <button type='submit' className='pt-1 pb-2 px-2 bg-[#63e] rounded font-bold text-2xl md:hover:scale-110 transition-all'>+</button>
        <button disabled={!disabled} className='p-2 bg-[#63e] rounded   md:hover:scale-110 transition-all' onClick={downloadPDF}>Download</button>
        </form>
        
    </>
  )
}

export default AddTodo