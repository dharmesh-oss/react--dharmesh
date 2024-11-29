// src/components/AddUser.jsx
import React, { useState } from "react";
import { ref, push, set } from "firebase/database";
import database from "../firebase";

const AddUser = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usersRef = ref(database, "users/");
    const newUserRef = push(usersRef);

    set(newUserRef, user)
      .then(() => alert("User added successfully!"))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
