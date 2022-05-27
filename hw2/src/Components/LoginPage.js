import React, { useEffect, useState } from "react";
export default function LoginPage() {
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
      setToken(true);
      CheckToken(token);
      return console.log(username, password, token);
    }
  }
  return (
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" onChange={getUserName} required />
      <label for="password">Password</label>
      <input type="text" id="password" onChange={getPassword()} required />
      <button onClick={checkAuthentication}>Login</button>
    </div>
  );
}
export function CheckToken(token) {
  if (token) {
    return true;
  }
  return null;
}
