import React from "react";
import "./EmployeeDashboard.css";
import Header from "./entities/Header";
import Taskinfo from "./entities/Taskinfo";
import Listoftask from "../TaskList/Listoftask";
import Attendance from "../Attendance";
// import { useLocation } from "react-router-dom";

const EmployeeDashboard = (props) => {

  return (
    <>
      <Header changeUser={props.changeUser} data={props.data} />
      <Attendance data={props.data}/>
      <Taskinfo data={props.data} />
      <Listoftask data={props.data} />
    </>
  );
};

export default EmployeeDashboard;
