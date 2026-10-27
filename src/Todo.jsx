function Todo(props) {
    return (
        <div className="todo">
            <span>{props.task}</span>

            <button onClick={props.deleteTask}>
                Delete
            </button>
        </div>
    );
}

export default Todo;