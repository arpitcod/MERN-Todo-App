import todoModel from "../model/todoModel.js";


export const createTodoController = async (rq,rs) =>{
    try {
        const {todo} = rq.body
        if (!todo) {
            return rs.status(400).send({
                success:false,
                message:"todo requred"
            })
        }

        const newTodo = await new todoModel({todo})
        await newTodo.save();


        return rs.status(201).send({
            success:true,
            message:"new todo is created",
            newTodo
        })
    } catch (error) {
        console.log(error);
    }
}


// get todo controller 

export const getTodoController = async (rq,rs) =>{
    try {
        
        const getTodos = await todoModel.find({});

        if (!getTodos) {
            return rs.status(404).send({
                success:false,
                message:"todo not found"
            })
        }

        return rs.status(200).send({
            success:true,
            totalTodos:getTodos.length,
            message:"all todos",
            getTodos
        })
    } catch (error) {
        return rs.status(500).send({
            success:false,
            message:"error while getting todos"
        })
        console.log(error)
    }
}


// update todo controller 

export const updateTodoController = async (rq,rs) =>{
    try {
        const {id} = rq.params;
        const {todo} = rq.body;

        const updateTodo = await todoModel.findByIdAndUpdate(id,{...rq.body},{new:true})
        if (!updateTodo) {
            return rs.status(404).send({
              success: false,
              message: 'Todo not found',
            });
          }

        return rs.status(200).send({
            success:true,
            message:"todo updated",
            updateTodo
        })

    } catch (error) {
        console.log(error)
        return rs.status(500).send({
            success:false,
            message:"error while updating todo"
        })
    }
}


// delete todo contrller 
export const deleteTodoController = async (rq,rs) =>{
    try {
        const {id} = rq.params;

        const todoDelete = await todoModel.findByIdAndDelete(id);

        return rs.status(200).send({
            success:true,
            message:"Todo deleted",
            todoDelete
        })
        
    } catch (error) {
        console.log(error)

        return rs.status(500).send({
            success:false,
            message:"error while deleting todo"
        })
    }
}