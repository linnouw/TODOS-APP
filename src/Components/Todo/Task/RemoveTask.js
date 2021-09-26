import React from "react";
import "../Todo.css";

export default function RemoveTask({ index, removeTask }) {
  return (
    <div className="remove-button">
      <button className="btn close" onClick={() => removeTask(index)}>
        x
      </button>
    </div>
  );
}
