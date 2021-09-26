import React, { useState } from "react";
import "../Todo.css";

export default function EditableInput({
  task,
  setEditing,
  index,
  removeTask,
  editTask,
}) {
  const [newTitle, setNewTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    newTitle === "" ? removeTask(index) : editTask(index, newTitle);
    setNewTitle("");
    setEditing(false);
  };
  return (
    <div className="edit-task-submit">
      <form onSubmit={handleSubmit} onBlur={handleSubmit}>
        <input
          type="text"
          defaultValue={task.title}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
