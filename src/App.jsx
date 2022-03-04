import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//importacao de componentes
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/addTask.jsx";

//css app
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      Title: "Porto",
      completed: false,
    },
    {
      id: 2,
      Title: "siderurgia",
      completed: false,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,

      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handletaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition} />

        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handletaskDeletion={handletaskDeletion}
        />
      </div>
    </>
  );
};

export default App;
