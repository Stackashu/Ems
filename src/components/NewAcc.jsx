import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import "./AddingUser.css";
import emailjs from "emailjs-com";
import { NavLink } from "react-router-dom";
import "./Auth/Login.css";
import EMSnav from "./EMSnav"
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const NewAcc = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [visbile, SetVisible] = useState(true);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskCounts, setTaskCounts] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  // otp verification
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
  };

  const sendOTP = (e) => {
    SetVisible(false);
    e.preventDefault(); // Prevent page refresh

    const otp = generateOtp();
    setGeneratedOtp(otp); // Store the generated OTP

    const templateParams = {
      from_email: email,
      otp: otp,
      from_name: firstName,
    };

    emailjs
      .send(
        "service_m4y5jn6",
        "template_663tv3d",
        templateParams,
        "xsqP04Arb72k1lUMn"
      )
      .then((response) => {
        alert("Email sent successfully:", response);
        setIsOtpSent(true);
      })
      .catch((error) => {
        alert.error("Error sending email:", error);
      });
  };

  const verifyOTP = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (otp === generatedOtp) {
      alert("OTP verified successfully!");
      // Additional information of new user
      if (firstName === "" || email === "" || password === "") {
        alert("Please fill in all fields");
        return;
      }

      //    setting up here for the tasks and new user tasks part is empty
      setTaskCounts({ active: 0, newTask: 0, completed: 0, failed: 0 });
      setTasks({
        title: "",
        date: "",
        description: "",
        category: "",
        active: "",
        newTask: "",
        failed: "",
        completed: "",
        taskCounts,
      });
      setNewUser({ id, firstName, email, password, tasks });

      // calling authContext of userData as data for ease
      const data = userData;
      setId(data.length + 1);
      console.log(id);
      data.push(newUser);
      // cleaning the data after submition
      setUserData(data);
      setEmail("");
      setFirstName("");
      setPassword("");
      // below here if the otp is invalid
    } else {
      alert("Invalid OTP. Please try again.");
    }
    setOtp("");
  };

  return (
    <>
    <EMSnav/>
      <div className="outerContainer">
        <div className="Loginbox">
          <form className="farm" onSubmit={sendOTP}>
            <input
              type="text"
              className="in"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="FirstName"
            />

            <input
              type="email"
              value={email}
              className="in"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              type="password"
              value={password}
              className="in"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <br />
            <button className="logbtn" type="submit">
              Send Otp
            </button>
            {visbile && (
              <pre>
                Have an Account? <NavLink to="/">Login.</NavLink>
              </pre>
            )}
          </form>

          {isOtpSent && (
            <form className="farm" onSubmit={verifyOTP}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                className="in"
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button className="logbtn" type="submit">
                Verify OTP
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default NewAcc;
