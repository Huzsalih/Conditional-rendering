import React from "react";

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, Admin!</h2>
      <p>You have successfully logedin as Admin.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
