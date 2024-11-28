// src/components/AddData.jsx
import React, { useState } from 'react';
import { ref, set, push } from 'firebase/database';
import database from '../firebaseConfig';

const AddData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique key for the new entry
    const dataRef = push(ref(database, 'users/'));

    set(dataRef, { name, email })
      .then(() => {
        alert('Data added successfully!');
        setName('');
        setEmail('');
      })
      .catch((error) => {
        alert('Error adding data: ' + error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Data</button>
    </form>
  );
};

export default AddData;
