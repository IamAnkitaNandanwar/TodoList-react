import React from 'react'

const TodoItems = ({ todo, ondelete }) => {
  return (
    <>
      <div className='container'>
        <h4>{todo.title}</h4>
        <h6>{todo.descp}</h6>
        <button className="btn btn-sm btn-primary" onClick={() => ondelete(todo)}>Delete</button>
        <hr />
      </div>
    </>
  )
}

export default TodoItems
