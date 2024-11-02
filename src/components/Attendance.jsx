import React from "react";
import { useState, useContext, useEffect } from "react";
import "./Attendance.css";
import { AuthContext } from "../context/AuthProvider";

const Attendance = (props) => {
  const [userData, setUserData] = useContext(AuthContext);
  const data = props.data;
  const attend = data.attendance;

  const [count, setCount] = useState(0);
  const [isPresent, setIsPresent] = useState(false);
  const [isLate, setIsLate] = useState(false);
  const [presentTime, setPresentTime] = useState("");
  const [lateTime, setLateTime] = useState("");
  const [mark, setMark] = useState("ATTENDANCE");

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    if (day === 1) {
      attend.presentDays = 0;
      attend.absentDays = 0;
      attend.halfDayLeaves = 0;
      attend.leavesLeft = 3;
    }
  }, []);

const handleAttendance = () => {
  
  const date = new Date();
  const hours = date.getHours();
  console.log(hours)
  const minutes = date.getMinutes();
  if (count === 0) {
    if (hours < 9 || (hours === 9 && minutes < 1)) {
      setIsPresent(true);
      setPresentTime(`${hours}:${minutes}:00`);
      attend.presentDays += 1;
      setMark(`Present (${hours}:${minutes}:00)`);
    } else {
      setIsLate(true);
      setLateTime(`${hours}:${minutes}:00`);
      attend.presentDays += 1;
      setMark(`Late  (${hours}:${minutes}:00)`);
    }
    console.log(attend);
    alert("Attendance Updated");
    setCount(count + 1);
  }
  setUserData()
  // check here for backend saving of data
};

  useEffect(() => {
    const resetAttendance = () => {
      setIsPresent(false);
      setIsLate(false);
      setPresentTime("");
      setLateTime("");
      setCount(0);
      setMark("ATTENDANCE");
    };
    const intervalId = setInterval(resetAttendance, 86400000); // 86400000 milliseconds = 1 day
    return () => clearInterval(intervalId);
  }, []);

  

  return (
    <>
      <div className="att">
        <button onClick={handleAttendance}>{mark}</button>
        <div>
          <pre>
            PD <span>: {attend.presentDays}</span>
          </pre>
          {/* present days */}
          <pre>
            LL <span>: {attend.leavesLeft}</span>
          </pre>
          {/* leaves left */}
          <pre>
            AD <span>: {attend.absentDays}</span>
          </pre>
          {/* absent days */}
          <pre>
            HDL <span>: {attend.halfDayLeaves}</span>
          </pre>
          {/* half days leave */}
          <pre></pre>
        </div>
      </div>
    </>
  );
};

export default Attendance;