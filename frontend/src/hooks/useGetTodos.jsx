import  { useEffect, useState } from 'react'
import { getTodos } from '../lib/todos';

const useGetTodos = () => {
  const [todos,setTodos] = useState([]);
  const [loading,setIsLoading] = useState(false);

    useEffect(()=>{
        const getTodo = async()=>{
          try {
            setIsLoading(true);
            const data = await getTodos();
          if(data.status===200){
            setTodos(data.data.data);
            setIsLoading(false)
          }
          } catch (error) {
            console.log(error);
          }
          
        }
        getTodo();
      },[])
  return [todos,setTodos,loading]
}

export default useGetTodos