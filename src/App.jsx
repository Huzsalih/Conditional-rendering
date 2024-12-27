import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import ErrorMessage from "./ErrorMessage";



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsAdmin(true);
      setIsLoggedIn(true);
      setShowError(false);
    } else if (username === "user" && password === "password") {
      setIsAdmin(false);
      setIsLoggedIn(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setShowError(false);
  };

  return (
    <div>
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      {isLoggedIn && isAdmin && <AdminDashboard onLogout={handleLogout} />}
      {isLoggedIn && !isAdmin && <UserDashboard onLogout={handleLogout} />}
      {showError && <ErrorMessage />}
    </div>
  );
};

export default App;
