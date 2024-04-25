import "./styles.css";
import NoToDo from "./Components/NoToDo";
import ToDoList from "./Components/ToDoList";
import {useState} from "react";

export default function App() {
    const [ToDos, setTodos] = useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]);
    return (
        <div className="Application">
            <h1>Aye Captain! 🫡</h1>
            {ToDos.length > 0 ? <ToDoList ToDos={ToDos}/> : <NoToDo/>}
            {ToDos.length > 0 ? <button onClick={() => setTodos([])}> Empty All </button> : null}
        </div>
    );
}
