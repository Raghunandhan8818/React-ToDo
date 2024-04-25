import "./styles.css";
import NoToDo from "./Components/NoToDo";
import ToDoList from "./Components/ToDoList";
import {useState} from "react";

export default function App() {
    const [ToDos, setTodos] = useState([{id: 0, title: "Read SpringBoot", completed: false}, {
        id: 1,
        title: "Complete assignments",
        completed: false
    }, {id: 2, title: "Prepare breakfast", completed: false}, {
        id: 3, title: "Sleep for 2 hours",
        completed: false
    }, {id: 4, title: "Take a shower", completed: false}]);

    function toggleToDo(id) {
        const updatedTodos = ToDos.map(todo =>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    function deleteCompletedToDos(){
        const updatedTodos = ToDos.filter(todo => !todo.completed);
        setTodos(updatedTodos);
    }
    let numberOfTasks = ToDos.length
    return (
        <div className="Application">
            <h1>Aye Captain! 🫡</h1>
            {numberOfTasks > 0 ? <ToDoList ToDos={ToDos} toggleToDo={toggleToDo}/> : <NoToDo/>}
            {numberOfTasks > 0 ? <button onClick={deleteCompletedToDos}> Remove Completed</button> : null}
        </div>
    );
}
