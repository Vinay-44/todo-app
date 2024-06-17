import {jsPDF} from 'jspdf'
import useGetTodos from "./hooks/useGetTodos";
import Layout from './components/Layout';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { axiosInstance } from './lib/axiosInstance';
function App() {

  const [todos,setTodos,loading] = useGetTodos();

  const downloadPDF = async() => {
    const doc = new jsPDF();

    todos.forEach((task, index) => {
        doc.text(`${index + 1}. ${task.todo} - ${task.status ? 'Completed' : 'Pending'}`, 10, 10 + (index * 10));
    });

    const pdfBlob = doc.output('blob');

    const formData = new FormData();

    formData.append('file',pdfBlob,'tasks.pdf');

    const sendReq =await axiosInstance.post('/todo/pdf',formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    if(sendReq.status===200){
      doc.save('tasks.pdf');
    }
};

  return (
    <>
     <Layout>
      <div className="absolute top-0  ">
      <a href="https://shanture.com" target="_blank">
      <img className="w-32 hover:scale-110 transition-all hover:animate-pulse" src="https://shanture.com/wp-content/uploads/2024/06/cropped-2-300x218.png"/>
        </a>
      </div>
      <h1 className="text-center text-3xl font-bold tracking-widest flex items-center justify-center"> </h1>
      <AddTodo disabled={todos.length} downloadPDF={downloadPDF} setTodos={setTodos}/>
      <TodoList loading={loading} setTodos={setTodos} todos={todos}/>
     </Layout>
    </>
  );
}

export default App;
