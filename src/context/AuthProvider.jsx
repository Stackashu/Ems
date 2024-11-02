import React, { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { empData, admData } = getLocalStorage();
    setUserData(empData);
  },[]);

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
