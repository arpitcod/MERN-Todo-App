import React from 'react'
import TodoInput from './TodoInput'
import TodoData from './TodoData'

const TodoBox = () => {
  return (
    <div className='container border border-2 border-danger mt-3 p-2'>
        {/* <TodoInput/> */}
        <TodoData/>
    </div>
  )
}

export default TodoBox