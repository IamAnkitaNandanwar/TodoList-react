import React from 'react'
import TodoItems from './TodoItems'

const Todos = (props) => {
    let todoStyle ={
        minHeight : "70vh",
        margin: "40px auto"
    }
    return (
        <div className='container my-3' style={todoStyle}>
            <h3 className='my-3'>Todos List</h3>
            {props.todos.length === 0 ? "No todos to display" :
                props.todos.map((element) => {
                    return <TodoItems todo={element} key={element.sno} ondelete={props.ondelete} />
                })
            }
        </div>
    )
}

export default Todos
