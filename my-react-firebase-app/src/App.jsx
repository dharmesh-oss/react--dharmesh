// src/App.jsx
import React from "react";
import AddUser from "./components/AddUser";
import FetchUsers from "./components/FetchUsers";
import UpdateUser from "./components/UpdateUser";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <h1>React + Vite + Firebase</h1>
      <AddUser />
      <FetchUsers />
      <UpdateUser />
    </div>
  );
};

export default App;
