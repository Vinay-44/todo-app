import express from 'express';
import expressUpload from 'express-fileupload';
import cors from 'cors';
import dotenv from 'dotenv';
import TodoRouter from './Routers/Todo.js';
dotenv.config();
const app = express();

app.use(expressUpload());
app.use(cors());
app.use(express.json())
app.use('/api/todo',TodoRouter);
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("Server Listening on ",PORT);
})