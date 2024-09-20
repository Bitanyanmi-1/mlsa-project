// import React from "react";

function Dashboard() {
  return (
    <div>
      <header className="header">
        <h1>Welcome to Your Dashboard</h1>
        <input type="text" placeholder="Search..." className="search-bar" />
      </header>

      <div className="card">
        <h2>Upcoming Assignments</h2>
        <p>No assignments due this week.</p>
      </div>

      <div className="card">
        <h2>Enrolled Courses</h2>
        <p>Introduction to Web Development</p>
      </div>

      <div className="card">
        <h2>Recent Activities</h2>
        <p>Submitted Statistics Assignment</p>
      </div>
    </div>
  );
}

export default Dashboard;
