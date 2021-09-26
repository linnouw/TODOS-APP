import React, { useEffect, useState } from "react";
import "./Todo.css";
import CreateTask from "./CreateTask/CreateTask";
import { Button } from "reactstrap";
import Task from "./Task/Task";
import CheckAllTasks from "./CheckAllTasks";

function Todo() {
  //store tasks in local storage
  const [tasks, setTasks] = useState([]);
  //active button for filter buttons
  const [filter, setFilter] = useState("All");
  //local storage
  //get todos
  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem("tasks"));

    if (getTasks) {
      setTasks(getTasks);
    }
  }, []);
  //save todos
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index, newTitle) => {
    const newTasks = [...tasks];
    newTasks[index].title = newTitle;
    setTasks(newTasks);
  };

  //function for arrow to check all the tasks as completed
  const checkTasks = (tasks) => {
    const newTasks = [...tasks];
    //if newTasks.completed are all true
    if (newTasks.every((newTask) => newTask.completed))
      newTasks.map((newTask) => (newTask.completed = false));
    else
      newTasks.forEach((newTask) =>
        newTask.completed
          ? newTask.completed
          : (newTask.completed = !newTask.completed)
      );
    setTasks(newTasks);
  };

  //filter button
  const names = ["All", "Active", "Completed"];
  const filteredTasks = tasks.filter(
    (task) =>
      filter === "All" ||
      (filter === "Active" && !task.completed) ||
      (filter === "Completed" && task.completed)
  );

  //filtering
  const activeTasks = tasks.filter((task) => task.completed === false);
  const completedTasks = tasks.filter((task) => task.completed === true);

  return (
    <div
      className={
        tasks.length > 0 ? "Todo box-layers-todo" : "Todo box-shadow-todo"
      }
    >
      <div className="top-block">
        {tasks.length > 0 ? (
          <CheckAllTasks tasks={tasks} checkTasks={checkTasks} />
        ) : (
          <div className="check-task"></div>
        )}
        <div className="todo-input">
          <CreateTask addTask={addTask} />
        </div>
      </div>
      <div className="display-tasks">
        {filteredTasks.map((task, index) => {
          return (
            <Task
              task={task}
              index={index}
              completeTask={completeTask}
              removeTask={removeTask}
              editTask={editTask}
              key={index}
            />
          );
        })}
      </div>
      <div>
        {tasks.length > 0 ? (
          <div className="bottom-block">
            <div className="block left">
              <p>
                {activeTasks.length} item{activeTasks.length > 1 ? "s" : ""}{" "}
                left
              </p>
            </div>
            <div className="block middle">
              {names.map((name) => {
                return (
                  <Button
                    className={
                      filter === name
                        ? "btn task-btn active-btn"
                        : "btn task-btn"
                    }
                    onClick={() => {
                      setFilter(name);
                    }}
                  >
                    {name}
                  </Button>
                );
              })}
            </div>
            {completedTasks.length > 0 ? (
              <div className="block right">
                <Button
                  className="clear-btn"
                  onClick={() => {
                    setTasks(activeTasks);
                  }}
                >
                  Clear completed
                </Button>
              </div>
            ) : (
              <div className="block right"></div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Todo;
