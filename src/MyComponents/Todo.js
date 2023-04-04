import React from "react";

function Todo({task, onDelete}){

    return(
        <div className="card my-3 mx-3">
            <h4>{task.title}</h4>
            <p>{task.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {onDelete(task)}} >Delete</button>

        </div>
    )
}

export default Todo;