import React, { useState } from "react";
import "./CreateTask.css";

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };

  return (
    <div className="new-task-submit">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="What needs to be done ?"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default CreateTask;
