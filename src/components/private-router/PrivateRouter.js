import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.adminInfo);

  return user?._id ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export const AdminPrivateRouter = ({ children }) => {
  const { user } = useSelector((state) => state.adminInfo);

  return user?._id ? (
    children
  ) : (
    <h1>You are not authorized to this resources</h1>
  );
};
