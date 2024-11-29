import React from "react";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <RegisterForm />
        <hr />
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
