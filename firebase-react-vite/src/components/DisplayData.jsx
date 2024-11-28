// src/components/DisplayData.jsx
import React, { useEffect, useState } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import database from '../firebaseConfig';

const DisplayData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const dataRef = ref(database, 'users/');

    // Listen for data changes
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userList = Object.entries(data).map(([id, user]) => ({ id, ...user }));
        setUsers(userList);
      } else {
        setUsers([]);
      }
    });
  }, []);

  const handleDelete = (id) => {
    remove(ref(database, `users/${id}`))
      .then(() => alert('Data deleted successfully!'))
      .catch((error) => alert('Error deleting data: ' + error.message));
  };

  return (
    <div className="mt-3">
      <h3>User List</h3>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.name} ({user.email})
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
