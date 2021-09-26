import React, { useState } from "react";
import "./Todo.css";
import { BsFillCaretDownFill } from "react-icons/bs";

export default function CheckAllTasks({ tasks, checkTasks }) {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      className={clicked ? "btn" : "btn complete-btn"}
      onClick={() => {
        checkTasks(tasks);
        setClicked(!clicked);
      }}
    >
      <BsFillCaretDownFill />
    </button>
  );
}
