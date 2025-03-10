// src/pages/TaskCreation.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useTasks} from '../components/TaskContext';

const TaskCreation: React.FC = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { addTask } = useTasks();  
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (newTask === "") return;

    const newTaskData = { id: Date.now(), title: newTask, description, Completed: false };
    addTask(newTaskData);

    navigate("/dashboard");  
  };

  return (
    <div className="container mt-5">
      <h1>Task Creation</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label">Task Name</label>
          <input
            type="text"
            className="form-control"
            id="taskName"
            placeholder="Task Name"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddTask}>Add Task</button>
      </form>
    </div>
  );
};

export default TaskCreation;

