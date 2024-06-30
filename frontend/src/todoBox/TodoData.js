import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
// import {useParams} from "react-router-dom"
const TodoData = () => {
  const [todos, setTodos] = useState([]);
  // const {id} = useParams();
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

  return (
    <>
      <TodoInput getData={getAllTodos} />
      <div className="container border border-2 border-dark mt-3 overflow-auto">
        {todos?.map((todo) => (
          <>
            {/* <table className="table-warning">
              <tbody>
                <tr className="table-warning">
                  <td className="table-warning w-100">{todo?.todo}</td>
                  <td className="table-warning">
                    <button
                      type="button"
                      className="btn btn-danger float-end"
                      onClick={() => hadnleDelete(todo?._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table> */}
            <div className="card text-bg-warning mb-3 w-100" key={todo?._id}>
            <div className="card-body d-flex">
              <h5 className="card-title w-100 ">{todo?.todo}</h5>

              <button
                type="button"
                className="btn btn-danger float-end"
                onClick={() => hadnleDelete(todo?._id)}
              >
                Delete
              </button>
            </div>
          </div>
          </>
        ))}
      </div>
    </>
  );
};

export default TodoData;
