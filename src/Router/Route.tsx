/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children?: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/" />;
};

const PublicRoute = ({ children }: PrivateRouteProps) => {
  const token = !!localStorage.getItem("token");
  return token ? <Navigate to="/home" /> : <>{children}</>;
};
export { PrivateRoute, PublicRoute };
