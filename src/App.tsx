import { Routes, Route } from "react-router-dom"; // Remove Router import
import { TaskProvider } from "./components/TaskContext";  // Import the context provider
import TaskCreation from "./pages/TaskCreation";
import TaskEditing from "./pages/TaskEditing";
import TaskList from "./pages/TaskDashBoardPage";
import TaskDetails from "./pages/TaskDetails";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <TaskProvider> 
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/creation" element={<TaskCreation />} />
        <Route path="/editing/:id" element={<TaskEditing />} />
      </Routes>
    </TaskProvider>
  );
}

export default App;


