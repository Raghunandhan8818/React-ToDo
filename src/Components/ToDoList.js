import "../styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CompletedToDos from "./CompletedToDos";
import PendingToDos from "./PendingToDos";

function ToDoList({ToDos, toggleToDo}) {

    function handleClick(id){
        toggleToDo(id)
    }

    return (
        <>
            {ToDos.map((todo) => {
                return(todo.completed ? <CompletedToDos key={todo.id} todo={todo} toggleToDo={handleClick}/> : <PendingToDos key={todo.id} todo={todo} toggleToDo={handleClick}/>)
            })}
        </>
    )
}

export default ToDoList;
