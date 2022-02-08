
import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState("");
    const [descp, setdescp] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !descp) {
            alert("Title and Description cannot be blank")
        } else {
            addTodo(title, descp);
            setTitle("");
            setdescp("");
        }
    }
    return (
        <div className='container my-2'>
            <h3>Add Todo list</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInput1" className="form-label">Todo Title</label>
                    <input type="title" className="form-control" value={title} id="exampleInput1" onChange={(e) => setTitle(e.target.value)} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInput2" className="form-label">Description</label>
                    <input type="descp" className="form-control" value={descp} onChange={(e) => setdescp(e.target.value)} id="exampleInput2" />
                </div>
                <button type="submit" className="btn btn-sm btn-success" onClick={submit}>Add Note</button>
            </form>
        </div>
    )
}

export default AddTodo
