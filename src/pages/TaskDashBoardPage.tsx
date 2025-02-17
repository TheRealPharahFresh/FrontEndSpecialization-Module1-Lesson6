import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

type Task = {
    id: number;
    title: string;
    description: string;
    Completed: boolean;
};

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        setTasks(storedTasks);
    }, []);

    const removeTask = (id: number) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const toggleTask = (id: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, Completed: !task.Completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

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
                            <button className="m-4">
                            <Link to={`/Editing/${task.id}`}>Edit</Link>
                            </button>
                            <button onClick={() => removeTask(task.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TaskList;
