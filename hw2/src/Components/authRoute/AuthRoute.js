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
  import { CheckToken } from "../../App";
  
  const AuthRoute = () => {
    const location = useLocation();
    const token = CheckToken();
    return token ? <Navigate to="/" replace state={{from: location}} /> : <Outlet />;
  }
  export default AuthRoute;