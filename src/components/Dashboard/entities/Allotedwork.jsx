import React, { useContext } from "react";
import "./Allotedwork.css";
import { AuthContext } from "../../../context/AuthProvider";
const Allotedwork = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="workcon">
      <div className="excelChart">
        <h4>Employee Name</h4>
        <h4> New Task</h4>
        <h4>Acitve Task</h4>
        <h4>Completed</h4>
        <h4>Failed</h4> 
      </div>
      <div className="emp">
        {userData.map((ele, idx) => {
          return (
            <div key={idx} className="people">
              <div className="space">
                <h3>{ele.firstName}</h3>
              </div>
              <div className="space">
                <h4>{ele.taskCounts.newTask}</h4>
              </div>
              <div className="space">
                <h4>{ele.taskCounts.active}</h4>
              </div>
              <div className="space">
                <h4>{ele.taskCounts.completed}</h4>
              </div>
              <div className="space">
                <h4>{ele.taskCounts.failed}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allotedwork;
