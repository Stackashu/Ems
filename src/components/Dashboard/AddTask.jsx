import React from "react";
import Header from "./entities/Header";
import CreateTask from "./entities/CreateTask";
import Allotedwork from "./entities/Allotedwork";
import Direction from "../direction";
import { useLocation } from "react-router-dom";

const AddTask = (props) => {
  return (
    <>
      <Header changeUser={props.changeUser} data={props.data} />
      <Direction />
      <CreateTask />
      <Allotedwork />
    </>
  );
};

export default AddTask;
