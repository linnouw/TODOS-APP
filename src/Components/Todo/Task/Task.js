import React, { useState } from "react";
import "../Todo.css";
import Checkbox from "./Checkbox";
import EditableInput from "./EditableInput";
import RemoveTask from "./RemoveTask";

function Task({ task, index, completeTask, removeTask, editTask }) {
  const [isEditing, setEditing] = useState(false);
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="input-block"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Checkbox index={index} task={task} completeTask={completeTask} />
      {isEditing ? (
        <EditableInput
          task={task}
          setEditing={setEditing}
          index={index}
          removeTask={removeTask}
          editTask={editTask}
        />
      ) : (
        <div
          className={task.completed ? "task-title-checked" : "task-title"}
          onClick={() => setEditing(true)}
        >
          {task.title}
        </div>
      )}
      {isShown ? (
        <RemoveTask index={index} removeTask={removeTask} />
      ) : (
        <div className="remove-button"></div>
      )}
    </div>
  );
}

export default Task;
