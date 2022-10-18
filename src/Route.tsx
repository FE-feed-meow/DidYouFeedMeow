import { ReactElement } from "react";
import React from "react";
import { Navigate } from "react-router-dom";

// 임시 토큰
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTVjNDhlMTdhZTY2NjU4MTNjNGQ2NCIsImV4cCI6MTY2NDQwOTI0NSwiaWF0IjoxNjU5MjI1MjQ1fQ.MLdhkX9yYY0W7KgeIEamilXJTQEJWlC4X9iJbIIhQ2U";

interface PrivateRouteProps {
  children?: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return token ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
