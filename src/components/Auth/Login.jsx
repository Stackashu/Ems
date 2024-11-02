import React, { useState, useEffect } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import EMSnav from "../EMSnav";


// localStorage.clear();
const Login = ({submitHandler,user,email,password,setEmail,setPassword}) => {
 
  return (
    <>
      
      {!user ? (
        <div>
          <EMSnav />
          <div className="outerContainer">
            <div className="Loginbox">
              <form className="farm" onSubmit={(e) => submitHandler(e)}>
                <input
                  className="in"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  required
                  type="email"
                  placeholder="Enter email"
                />
                <input
                  className="in"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  required
                  type="password"
                  placeholder="Enter  password"
                />
                <button className="logbtn" type="submit">
                  Log in
                </button>
                <pre>
                  Don't have an Account?{" "}
                  <NavLink to="/new-user">Create a new Account.</NavLink>
                </pre>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Login;
