import React, { useState } from 'react';

const TodoApp = () => {

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState(' ');

    const addTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }])
        }
    }

    const toggleTaskCompleted = (id) => {
        setTasks(tasks.map(task => (
            task.id === id ? { ...task, completed: !task.completed } : task
        )))
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => (
            task.id !== id
        )))
    }
    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                margin: "20px",
                padding: "20px",
                maxWidth: "400px",
                border: "1px solid #ccc",
                borderRadius: "5px",
            }}
        >
            <h1 style={{ fontSize: "24px", textAlign: "center" }}>To - do List</h1>
            <div
                style={{
                    display: "flex",
                    marginBottom: "20px",
                    gap: "10px",
                }}
            >
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder='Add a new task...'
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginBottom: "10px",
                            backgroundColor: task.completed ? "#d4edda" : "#f8d7da",
                            borderRadius: "5px",
                            textDecoration: task.completed ? "line-through" : "none",
                            border: "1px solid #ccc",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompleted(task.id)}
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                        <button
                            onClick={() => deleteTask(task.id)}
                            style={{
                                padding: "5px 10px",
                                fontSize: "14px",
                                backgroundColor: "#dc3545",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default TodoApp;



