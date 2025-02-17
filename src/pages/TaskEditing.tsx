import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Task {
    id: number;
    title: string;
    description: string;
    Completed: boolean;
};

const TaskEditing: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    useEffect(() => {
        const storedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
        setTasks(storedTasks);
    }, []);

    const handleSelectTask = (task: Task) => {
        setSelectedTask(task);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!selectedTask) return;
        setSelectedTask({ ...selectedTask, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        if (!selectedTask) return;
        const updatedTasks = tasks.map(task =>
            task.id === selectedTask.id ? selectedTask : task
        );
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        alert("Task updated successfully!");
    };

    return (
        <div className="container mt-5">
            <h1>Task Editing</h1>
            <div className="list-group mb-3">
                {tasks.map(task => (
                    <button
                        key={task.id}
                        className="list-group-item list-group-item-action"
                        onClick={() => handleSelectTask(task)}
                    >
                        {task.title}
                    </button>
                ))}
            </div>
            {selectedTask && (
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Task Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={selectedTask.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            value={selectedTask.description}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleSave}>Save Task</button>
                </form>
            )}
        </div>
    );
}

export default TaskEditing;



