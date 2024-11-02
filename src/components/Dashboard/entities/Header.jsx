import React, { useState } from "react";
import "./Header.css";
import { BrowserRouter as navigate } from "react-router-dom";

const Header = (props) => {
  const data = props.data;

  // towards login page
  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    navigate("/");
  };

  return (
    <div className="topbar">
      <h1>
        Hello <br></br> <span>{data.firstName}</span>
      </h1>
      <div>
        <button onClick={logoutUser} className="loobtn">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Header;
