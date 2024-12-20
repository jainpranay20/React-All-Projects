import React, { useState } from "react";
import "./index.css";
import TodoList from "./todoList";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text: task, completed: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
  });

  return (
    <div className="Todo">
      <h1>To-Do Todo</h1>
      <TodoList
        tasks={filteredTasks}
        addTask={addTask}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
        setFilter={setFilter}
      />
    </div>
  );
};

export default Todo;
