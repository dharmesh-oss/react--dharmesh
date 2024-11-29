// src/components/FetchUsers.jsx
import React, { useEffect, useState } from "react";
import { ref, onValue, remove } from "firebase/database";
import database from "../firebase";

const FetchUsers = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const usersRef = ref(database, "users/");
    onValue(usersRef, (snapshot) => {
      setUsers(snapshot.val() || {});
    });
  }, []);

  const deleteUser = (userId) => {
    const userRef = ref(database, `users/${userId}`);
    remove(userRef)
      .then(() => alert("User deleted successfully!"))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {Object.entries(users).map(([id, user]) => (
          <li key={id}>
            {user.name} - {user.email}{" "}
            <button onClick={() => deleteUser(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchUsers;
