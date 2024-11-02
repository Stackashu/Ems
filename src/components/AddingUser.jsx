import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import "./AddingUser.css";
const AddingUser = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newUser, setNewUser] = useState({});

 const handleSubmit = (e) => {
  e.preventDefault();
  if (firstName === "" || email === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }
  //    setting up here for the tasks and new user tasks part is empty
  setTasks({
    title: "",
    date: "",
    description: "",
    category: "",
    active: "",
    newTask: "",
    failed: "",
    completed: "",
  });
  setNewUser({ id, firstName, email, password, tasks });

  // calling authContext of userData as data for ease
  const data = userData;
  setId(data.length + 1);
  data.push(newUser);
  // cleaning the data after submition
  setUserData(data);
  setEmail("");
  setFirstName("");
  setPassword("");
};

  return (
    <>
      <div className="cont2">
        <form className="User" onSubmit={handleSubmit}>
          <div className="inputdivs">
            <label>FirstName</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="inputdivs">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputdivs">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <br />
          <button type="submit">Add User</button>
        </form>
      </div>
    </>
  );
};

export default AddingUser;
