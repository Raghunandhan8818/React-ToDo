import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function PendingToDos({todo, toggleToDo}) {

    return (
        <>
            <button key={todo.id} onClick={() => toggleToDo(todo.id)} type="button"
                    className="list-group-item list-group-item-action m-2 shadow-blue-600">❌ &nbsp; &nbsp; {todo.title}
            </button>
        </>
    )

}