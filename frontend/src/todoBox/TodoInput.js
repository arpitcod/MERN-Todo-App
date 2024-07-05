import React, { useState } from "react";
import { MdCreate } from "react-icons/md";
import axios from 'axios'
const TodoInput = ({getData}) => {

    const [todo,setTodo] = useState('');

    const handleCreateTodo = async (e) =>{
       e.preventDefault();
       console.log({todo})

       try {
          await axios.post('http://localhost:2024/api/todo/create-todo',{todo})
          .then(response =>{
            if (response.data.success) {
                console.log("created todo",response.data)
                setTodo("")
                getData();
            }
          }).catch(err =>{
            console.log(err)
          })
          
       } catch (error) {
        console.log(error)
       }
    }
  return (
    <div className="todo_input container">
      <form onSubmit={handleCreateTodo}>
        <div className="d-flex my-2">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your task..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
         
        <button type="submit" className="create_button btn btn-primary mx-3">
        <MdCreate />
        </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
