import { axiosInstance } from "./axiosInstance.js"

export const getTodos = async()=>{
    try {
        const data  =await axiosInstance.get('/todo');
        return data;
    } catch (error) {
        return error;
    }
}

export const postTodo = async(values)=>{
    try {
        const sendReq = await axiosInstance.post('/todo',values);

        if(sendReq.status === 200){
            return sendReq;
        }
    } catch (error) {
        return error;
    }
}

export const deleteTodo = async(id)=>{
    try {
        const sendReq =await axiosInstance.delete(`/todo/${id}`);

        if(sendReq.status===200){
            return sendReq;
        }
    } catch (error) {
        return error;
    }
}

export const updateTodoStatus = async(id,value)=>{
    try {
        const sendReq =await axiosInstance.patch(`/todo/status/${id}`,{status:value});

        if(sendReq.status === 200){
            return sendReq;
        }
    } catch (error) {
        return error;
    }
}


export const updateTodo = async(id,value)=>{
    try {
        const sendReq =await axiosInstance.patch(`/todo/${id}`,{todo:value});

        if(sendReq.status===200){
            return sendReq;
        }
    } catch (error) {
        return error;
    }
}