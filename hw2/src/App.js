import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useNavigate,
  NavLink,
  Navigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import TaskList from "./Components/TaskList";
import ReactDOM from "react-dom";
import PrivateRoute from "./Components/privateRoute/PrivateRoute";
import AuthRoute from "./Components/authRoute/AuthRoute";
let Token = null;
export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="App">
      <nav className="nav-bar">
        <NavLink className="links" to="/" end>
          Home
        </NavLink>
        <NavLink className="links" to="/login" end>
          Login
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/login"
          element={Token ? <Navigate to="/" replace /> : <LoginPage />}
        />
        {/* <Route exact path="/login" element={<LoginPage />} /> */}
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<HomePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export function HomePage() {
  function showCreateTask() {
    return ReactDOM.render(
      <TaskList />,
      document.getElementById("container-left")
    );
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div id="button-container">
        <button
          className="nav-button"
          onClick={showCreateTask}
          id="btn-new-task"
        >
          Add
        </button>
      </div>
      <div id="container">
        <div id="container-left"></div>
        <div id="container-overlay">
          <h2>Task List</h2>
          <div id="container-right"></div>
        </div>
      </div>
    </div>
  );
}
// function LoginPage(props) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   function getPassword(e) {
//     setPassword(e.target.value);
//   }
//   function getUserName(e) {
//     console.log(username);
//     setUsername(e.target.value);
//   }
//   function checkAuthentication(props) {
//     if (username === "admin" && password === "admin") {

//     } else {
//       alert("Wrong username or password");
//     }
//   }
//   return (
//     <div>
//       <label for="username">Username</label>
//       <input type="text" id="username" onChange={getUserName} />
//       <label for="password">Password</label>
//       <input type="text" id="password" onChange={getPassword} />
//       <button onClick={checkAuthentication}>Login</button>
//     </div>
//   );
// }
function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  function getPassword(e) {
    setPassword(e.target.value);
    console.log(password);
  }
  function getUserName(e) {
    setUsername(e.target.value);
    console.log(username);
  }
  function checkAuthentication() {
    if (username === "admin" && password === "admin") {
      Token = true;
      // setToken(true);
      CheckToken(Token);
      navigate("/");
    }
  }
  return (
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" onChange={getUserName} required />
      <label for="password">Password</label>
      <input type="text" id="password" onChange={getPassword} required />
      <button onClick={checkAuthentication}>Login</button>
    </div>
  );
}
export function CheckToken() {
  if (Token) {
    console.log(Token);
    return true;
  }
  return null;
}
