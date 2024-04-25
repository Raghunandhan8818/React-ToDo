import "../styles.css";
import React from "react";
import "../styles.css"
function ToDoList({ToDos, toggleToDo}) {
    return (
        <>
            <div className="container">
                <ul>
                    {ToDos.map((toDo) => {
                        return (
                            <li key={toDo.id}>
                                <div onClick={() => toggleToDo(toDo.id)}>
                                    {toDo.completed ? <b><strike>{toDo.title}</strike></b> :
                                        <b><h4>{toDo.title}</h4></b>}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default ToDoList;
