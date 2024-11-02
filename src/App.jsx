import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate,} from "react-router-dom";
import AddTask from "./components/Dashboard/AddTask";
import AddingUser from "./components/AddingUser";
import NewAcc from "./components/NewAcc";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";
import CreateUser from "./components/Dashboard/CreateUser";

// localStorage.clear()

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null); 
  const [userData, setUserData] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid User");
      }
    } else {
      alert("Invalid User");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <Router>
      <Routes>
     <Route
  path="/"
  element={
    !user ? (
      <Login user={user} submitHandler={submitHandler} email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>
    ) : user === "admin" ? (
      <Navigate to="/create-task" replace />
    ) : user === "employee" ? (
      <Navigate to="/employee" replace />
    ) : null
  }
/>
        <Route path="/new-user" element={<NewAcc />} />
        <Route
          path="/employee"
          element={
            user === "employee" ? (
              <EmployeeDashboard changeUser={setUser} data={loggedUser} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/create-task"
          element={
            user === "admin" ? (
              <AddTask changeUser={setUser} data={{ firstName: "Admin" }} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/create-user"
          element={
            user === "admin" ? (
              <CreateUser changeUser={setUser} data={{ firstName: "Admin" }} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;