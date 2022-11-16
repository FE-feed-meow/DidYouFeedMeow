import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children?: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem("token");
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return token ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
