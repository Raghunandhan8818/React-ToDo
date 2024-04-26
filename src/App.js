import "./styles.css";
import NoToDo from "./Components/NoToDo";
import ToDoList from "./Components/ToDoList";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TaskForm from "./Components/TaskForm";

export default function App() {
    const [ToDos, setTodos] = useState([{id: 0, title: "Read SpringBoot", completed: false}, {
        id: 1,
        title: "Complete assignments",
        completed: false
    }, {id: 2, title: "Prepare breakfast", completed: false}, {
        id: 3, title: "Sleep for 2 hours",
        completed: false
    }, {id: 4, title: "Take a shower", completed: false}]);

    const [taskFormField, setTaskFormField] = useState("")

    function addNewToDo(){
        if(taskFormField == null || taskFormField === ""){
            window.alert("Empty Task Cant Be Added :(");
            return null;
        }
        event.preventDefault()
        let newTodo = {}
        newTodo.title = taskFormField;
        newTodo.completed = false;
        newTodo.id = crypto.randomUUID();
        setTodos([newTodo, ...ToDos])
        setTaskFormField("")
    }

    function toggleToDo(id) {
        const updatedTodos = ToDos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    function deleteCompletedToDos() {
        const updatedTodos = ToDos.filter(todo => !todo.completed);
        setTodos(updatedTodos);
    }

    function onChangeHandler(title){
        setTaskFormField(title);
        console.log(taskFormField)
    }

    let numberOfTasks = ToDos.length
    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center main-row">
                    <div className="col shadow main-col bg-white">
                        <div className="container-fluid">
                            <div className="row bg-primary text-white">
                                <div className="col  p-2">
                                    <h4>
                                        <center>Aye Captain! 🫡</center>
                                    </h4>
                                </div>
                            </div>
                            <TaskForm value={taskFormField} onChangeHandler={onChangeHandler} onButtonClickHandler={addNewToDo} />
                            <div className="list-group">
                                {numberOfTasks > 0 ? <ToDoList ToDos={ToDos} toggleToDo={toggleToDo}/> : <NoToDo/>}
                            </div>
                            {numberOfTasks > 0 ?
                                <center>
                                    <button className="btn btn-danger m-4" onClick={deleteCompletedToDos}> Remove
                                        Completed
                                    </button>
                                </center> : null}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
