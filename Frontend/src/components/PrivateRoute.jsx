import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, admin }) => {
  const isAuthenticated = localStorage.getItem("token"); 
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userRole = userData ? userData.role : null;

  const isAuthorized = isAuthenticated && (!admin || userRole === "admin");

  return isAuthorized ? element : <Navigate to="/Login" replace />;
};

export default PrivateRoute;
