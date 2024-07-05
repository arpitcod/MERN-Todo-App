import React from 'react'
import TodoData from './TodoData'
// import TodoInput from './TodoInput'


const TodoBoxContainer = () => {
  return (
    <div className='main_todo_container container  mt-3 p-2 w-50'>
        {/* <TodoInput/> */}
        <TodoData/>
    </div>
  )
}

export default TodoBoxContainer