import express from 'express';
import { createTodoController, deleteTodoController, getTodoController, updateTodoController } from '../controller/todoController.js';

const router = express.Router();


// create todo http://localhost:2024/api/todo/create-todo
router.post('/create-todo',createTodoController);

// get todos http://localhost:2024/api/todo/get-todo
router.get("/get-todo",getTodoController);

// update todo http://localhost:2024/api/todo/update-todo/6669e1281b88ae959dcdb6ae
router.put("/update-todo/:id",updateTodoController);

// delete todo 
router.delete("/delete-todo/:id",deleteTodoController)



export default router;