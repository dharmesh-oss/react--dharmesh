import React from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Firebase Auth</a>
        <button className="btn btn-outline-danger ms-auto" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
