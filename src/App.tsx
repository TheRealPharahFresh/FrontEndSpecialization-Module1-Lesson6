import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Route, Routes } from 'react-router-dom';
import TaskCreation from "./pages/TaskCreation";
import TaskEditing from "./pages/TaskEditing";
import TaskList from "./pages/TaskDashBoardPage";
import TaskDetails from "./pages/TaskDetails";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/creation" element={<TaskCreation />} />
        <Route path="/editing/:id" element={<TaskEditing />} />
      </Routes>
    </div>
  );
}

export default App;
