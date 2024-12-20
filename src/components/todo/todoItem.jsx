import React, { useState } from "react";

const TodoItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
