function TaskForm({value, onChangeHandler, onButtonClickHandler}) {
    return (
        <div className="row p-2 m-3">
            <div className="col-8">
                <input type="email" className="form-control" id="colFormLabel"
                       placeholder="Enter Your Task !" value={value} onChange={()=>onChangeHandler(event.target.value)}/>
            </div>
            <div className="col-4">
                <center>
                    <button className="btn btn-primary" onClick={onButtonClickHandler}>Add Task!</button>
                </center>
            </div>
        </div>
    )
}

export default TaskForm;