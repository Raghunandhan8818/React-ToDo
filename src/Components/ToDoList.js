import "../styles.css";
import React from "react";

function ToDoList({ToDos}) {
    return (
        <>
            {ToDos.map((toDo, index) => {
                return (
                    <div key={index}>
                        <input type="checkbox" name={index}/>
                        <label htmlFor={index}>{toDo}</label>
                        <p/>
                    </div>
                )
            })}
        </>
    );
}

export default ToDoList;