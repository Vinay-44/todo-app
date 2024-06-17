import path from "path";
import Prisma from "../prisma/index.js";
import fs from 'fs';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getTodos = async (req, res) => {
  try {
    const data = await Prisma.todos.findMany({ orderBy: { Id: "desc" } });
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const postTodos = async (req, res) => {
  try {
    const { todo } = req.body;
    const data = await Prisma.todos.create({ data: { todo } });

    return res.status(200).json({ msg: "Saved!", data });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const deleteTodos = async (req, res) => {
  try {
    const { id } = req.params;
    await Prisma.todos.delete({ where: { Id: +id } });

    return res.status(200).json({ msg: "Deleted!" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const updateTodoStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    const data = await Prisma.todos.update({
      where: { Id: Number(id) },
      data: { status },
    });

    return res.status(200).json({ msg: "Updated!", data });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { todo } = req.body;
    const data = await Prisma.todos.update({
      where: { Id: Number(id) },
      data: { todo },
    });
    return res.status(200).json({ msg: "Updated!", data });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


export const savePdf = async(req,res)=>{
  try {
  const {file} = req.files;
  const newFileName = `${Date.now()}__${file.name}`;
  const savePath = path.join(__dirname, '../uploads', newFileName);

  fs.mkdirSync(path.dirname(savePath), { recursive: true });

    file.mv(savePath,async function (err){
      if(err){
        console.log(err);
        return res.status(500).json({ msg: err.message });
      }
      const data = fs.readFileSync(savePath,{encoding:'base64'})    
    await Prisma.pDFs.create({data:{data}})
    return res.status(200).json({msg:"Saved!"})
    });

    
  } catch (error) {
    console.log(error);
    return res.status(500).json({msg:error.message})
  }
}