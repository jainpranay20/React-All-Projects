import React, { useState, useEffect } from "react";

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [loading, setLoading] = useState(false);

    // API Base URL
    const API_URL = "https://jsonplaceholder.typicode.com/todos";

    // Fetch tasks (GET)
    const fetchTasks = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}?_limit=5`); // Limit to 5 tasks
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        } finally {
            setLoading(false);
        }
    };

    // Add a new task (POST)
    const addTask = async () => {
        if (!newTask.trim()) {
            alert("Task cannot be empty");
            return;
        }
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: newTask,
                    completed: false,
                }),
            });
            const data = await response.json();
            setTasks((prevTasks) => [data, ...prevTasks]); // Add the new task to the top of the list
            setNewTask(""); // Clear input
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    // Fetch tasks on component mount
    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div style={{ maxWidth: "500px", margin: "20px auto", textAlign: "center" }}>
            <h2>Task Manager</h2>
            <div>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    style={{ width: "70%", padding: "10px", marginRight: "10px" }}
                />
                <button onClick={addTask} style={{ padding: "10px 20px" }}>
                    Add Task
                </button>
            </div>
            {loading ? (
                <p>Loading tasks...</p>
            ) : (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {tasks.map((task) => (
                        <li key={task.id} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                            {task.title} {task.completed && <span style={{ color: "green" }}>(Completed)</span>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskManager;
