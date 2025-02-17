import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskCreation: React.FC = () => {
    const [newTask, setNewTask] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const navigate = useNavigate();

    const addTask = () => {
        if (newTask === "") return;

        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        const newTaskData = { id: tasks.length + 1, title: newTask, description, Completed: false };
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTaskData]));

        navigate("/TaskDashboard");
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
                <button type="button" className="btn btn-primary" onClick={addTask}>Add Task</button>
            </form>
        </div>
    );
}

export default TaskCreation;
