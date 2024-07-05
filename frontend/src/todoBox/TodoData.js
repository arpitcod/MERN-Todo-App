import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import {useParams} from 'react-router-dom'

const TodoData = () => {
  const {id} = useParams();
  // const id = useParams().id;
  const [todos, setTodos] = useState([]);
  const [getTodo ,setGetTodo] =useState([])
  const params = useParams();
  const getAllTodos = async () => {
    try {
      await axios
        .get("http://localhost:2024/api/todo/get-todo")
        .then((response) => {
          if (response?.data?.getTodos) {
            setTodos(response?.data?.getTodos);
            console.log("all todos", response.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllTodos();
  }, []);

  // delete todo
  const hadnleDelete = async (id) => {
    try {
      await axios
        .delete(`http://localhost:2024/api/todo/delete-todo/${id}`)
        .then((response) => {
          if (response?.data?.success) {
            getAllTodos();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getSingleTodo = async (id) =>{
            try {
                await axios.get(`http://localhost:2024/api/todo/get-single-todo/${id}`)
                .then(response =>{
                    if (response?.data?.success) {
                      setGetTodo(response?.data?.getTodo)
                        console.log("get single todo",response.data.getTodo)
                        console.log("get single todo",response.data)
                    }
                }).catch(err =>{
                    console.log(err)
                })            
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(()=>{
            getSingleTodo();
        },[])
    
        // update todo
      const handleUpdate = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:2024/api/todo/update-todo/${getTodo._id}`,{todo:getTodo.todo})
          .then(response =>{
            if (response?.data?.success) {
            //  alert("todo updated successfully")
            
             getAllTodos();


            }
          }).catch(err =>{
            console.log(err)
          })
    
        } catch (error) {
          console.log(error);
        }
       
      };
      
      // if (!todos || todos.length === 0) {
      //   return <p className="text-center d-flex justify-content-center align-items-center" style={{ height: "73%" }}>No todos</p>;
      // }
  // update todo
  // s
  return (
    <>
    
      <TodoInput getData={getAllTodos} />
      <div className="todo_data_container container  mt-3 overflow-auto">
        {
         todos.length === 0 ?(<p className="text-center fs-5 fw-semibold">No todos</p>) :(
          todos?.map((todo) => (
            <>
              <div className=" card text-bg-dark my-2 w-100" key={todo?._id}>
                <div className="todo_card_container card-body d-flex">
                  <h5 className="card-title w-100 ">{todo?.todo }</h5>
  {/* update button ..................................................................................... */}
                  
                    
                   <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                    onClick={() => getSingleTodo(todo?._id)}
                  >
                    Update
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
            
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="message-text"
                                className="col-form-label"
                              >
                                Message:
                              </label>
                              <textarea
                                className="form-control"
                                id="message-text"
                                defaultValue={""}
                                placeholder="Write note...."
                                value={getTodo?.todo}
                                onChange={(e)=>{
                                  setGetTodo(prev =>{
                                    return {
                                      ...prev,
                                      todo:e.target.value
                                    }
                                  })
                                }}
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleUpdate}
                            data-bs-dismiss="modal"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> 
                    
                  <button
                    type="button"
                    className="btn btn-danger float-end mx-2"
                    onClick={() => hadnleDelete(todo?._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          ))
         )
       }
      </div>
    </>
  );
};

export default TodoData;
