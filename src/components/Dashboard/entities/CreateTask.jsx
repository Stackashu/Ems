import React, { useState } from "react";
import "./CreateTask.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask({ title, date, description, category,active: false,newTask: true,failed: true,completed: false, })

    const data = userData;

    data.forEach(function (element) {
      if (assignTo.toLowerCase() === element.firstName.toLowerCase()) {
        element.tasks.push(newTask);
        element.taskCounts.newTask = element.taskCounts.newTask + 1;
      }
    });
    setUserData(data);
  // cleaning the data after submition
    setAssignTo("");
    setCategory("");
    setDate("");
    setDescription("");
    setTitle("");
  };

  return (
    <div className="cont">
      <form className="taskform" onSubmit={handleSubmit}>
        <div className="leftside">
          <div>
            <h2>Task Title</h2>
            <input
              className="createinput"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a task"
            />
          </div>
          <div>
            <h2>Date</h2>
            <input
              className="createinput"
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div>
            <h2>Assign to</h2>
            <input
              className="createinput"
              type="text"
              name="assignTo"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="employee name"
            />
          </div>
          <div>
            <h2>Category</h2>
            <input
              className="createinput"
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="design,dev,etc"
            />
          </div>
        </div>
        <div className="rightside">
          <div>
            <h2>Description</h2>
            <textarea
              className="createinputd"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="13"
            />
          </div>
          <button>Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
