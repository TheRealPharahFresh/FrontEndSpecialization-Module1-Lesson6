// src/pages/TaskDashBoardPage.tsx

import React from "react";
import { Link } from "react-router-dom";
import { useTasks } from "../components/TaskContext"; 


const TaskList: React.FC = () => {
  const { tasks, removeTask, toggleTask } = useTasks(); 

  return (
    <>
      <div>
        <h1>Task List Dashboard</h1>
        {tasks.length === 0 ? <p>No tasks available</p> : null}
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.Completed}
                onChange={() => toggleTask(task.id)}
              />
              <Link to={`/task/${task.id}`}>{task.title}</Link>
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;

