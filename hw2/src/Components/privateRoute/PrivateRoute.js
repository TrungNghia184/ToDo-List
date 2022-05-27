import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";

import React from "react";
import LoginPage from "../LoginPage";
import { HomePage } from "../../App";
import { CheckToken } from "../../App.js"

const PrivateRoute = () => {
  const location = useLocation();
  const token = CheckToken();
  return token ? <Outlet /> : <Navigate to="/login" replace state={{from: location}} />;
}
export default PrivateRoute;