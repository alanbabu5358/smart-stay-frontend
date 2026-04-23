import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Complaints from "./pages/Complaints";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Navbar />

      <div className="container">
        <Routes>

          {/* Always redirect root */}
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              token ? <Dashboard /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/complaints"
            element={
              token ? <Complaints /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/admin"
            element={
              token ? <Admin /> : <Navigate to="/login" />
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;