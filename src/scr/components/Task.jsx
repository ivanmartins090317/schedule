import React from "react";
import "./Task.css";

import { CgClose } from "react-icons/cg";

const Task = ({ task, handleTaskClick, handletaskDeletion }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div clasName="buttons-container">
        <button
          className="remove-task"
          onClick={() => handletaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
  // return <div className="task-container">{task.Title}</div>;
};

export default Task;
