import { useState } from "react";
import Todo from "./Todo";
import "./App.css";

function App() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    function addTask() {
        if (task.trim() !== "") {
            setTodos([...todos, task]);
            setTask("");
        }
    }

    function deleteTask(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div className="container">
            <h1>TODO Application</h1>

            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTask}>Add</button>

            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    task={todo}
                    deleteTask={() => deleteTask(index)}
                />
            ))}
        </div>
    );
}

export default App;