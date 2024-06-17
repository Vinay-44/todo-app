import express from 'express';
import { deleteTodos, getTodos, postTodos, savePdf, updateTodo, updateTodoStatus } from '../Controllers/Todo.js';

const TodoRouter = express.Router();


TodoRouter.get('/',getTodos);
TodoRouter.post('/',postTodos);
TodoRouter.delete('/:id',deleteTodos);
TodoRouter.patch('/status/:id',updateTodoStatus)
TodoRouter.patch('/:id',updateTodo)
TodoRouter.post('/pdf',savePdf);

export default TodoRouter;