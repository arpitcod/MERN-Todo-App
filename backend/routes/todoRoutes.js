import express from 'express';
import { createTodoController, deleteTodoController, getSingleTodoController, getTodoController, updateTodoController } from '../controller/todoController.js';

const router = express.Router();


// create todo http://localhost:2024/api/todo/create-todo
router.post('/create-todo',createTodoController);

// get todos http://localhost:2024/api/todo/get-todo
router.get("/get-todo",getTodoController);

// update todo http://localhost:2024/api/todo/update-todo/6669e1281b88ae959dcdb6ae
router.put("/update-todo/:id",updateTodoController);

// delete todo http://localhost:2024/api/todo/delete-todo/${id}
router.delete("/delete-todo/:id",deleteTodoController)

//get single todo http://localhost:2024/api/todo/get-single-todo/668676c49c0d92cb4d6ce40d
router.get('/get-single-todo/:id',getSingleTodoController)



export default router;