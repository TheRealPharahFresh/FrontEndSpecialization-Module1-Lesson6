import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"
interface Task {
    id: number;
    title: string;
    description: string;
    Completed: boolean;
    
} 

const TaskDetails: React.FC = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState<Task | null>(null);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        const foundTask = storedTasks.find((task: Task) => task.id === Number(id));
        if (!foundTask) {
            navigate("/TaskDashboard");
            return;
        }
        setTask(foundTask);
    }, [id, navigate]);

    if (!task) {
        return null;
    }

    return (
        <>
            <div>
                <h1>Task Details</h1>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>Completed: {task.Completed ? "Yes" : "No"}</p>
            </div>
        </>
    );
};

export default TaskDetails;