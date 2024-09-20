// import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Courses from "./Courses.jsx";
import Assignments from "./Assignments.jsx";
import Forum from "./Forum.jsx";
import Profile from "./Profile.jsx";
import Logins from "./Logins.jsx";
import C
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <h2>Student Portal</h2>
          <ul>
            <li>
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
            <li>
              <Link to="/courses" className="nav-link">Courses</Link>
            </li>
            <li>
              <Link to="/assignments" className="nav-link">Assignments</Link>
            </li>
            <li>
              <Link to="/forum" className="nav-link">Forum</Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link">Profile</Link>
            </li>
            <li>
              <Link to="/logins" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logins" element={<Logins />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
