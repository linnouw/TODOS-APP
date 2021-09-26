import React from "react";
import "../Todo.css";

export default function Checkbox({ task, index, completeTask }) {
  return (
    <div className="round-checkbox">
      <input
        id="checkbox"
        type="checkbox"
        onClick={() => {
          completeTask(index);
        }}
        checked={task.completed}
      />
    </div>
  );
}
