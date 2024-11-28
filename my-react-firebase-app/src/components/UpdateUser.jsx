// src/components/UpdateUser.jsx
import React, { useState } from "react";
import { ref, update } from "firebase/database";
import database from "../firebase";

const UpdateUser = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const userRef = ref(database, `users/${userId}`);

    update(userRef, user)
      .then(() => alert("User updated successfully!"))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
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
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser;
