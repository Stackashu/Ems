import React from "react";
import "./Listoftask.css";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import Failed from "./Failed";

const Listoftask = ({ data }) => {
  return (
    <div className="lowbar"> 
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.NewTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <Failed key={idx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default Listoftask;
