// src/App.jsx
import React from 'react';
import AddData from './components/AddData';
import DisplayData from './components/DisplayData';

const App = () => {
  return (
    <div className="container mt-5">
      <h1>Firebase Realtime Database Example</h1>
      <AddData />
      <DisplayData />
    </div>
  );
};

export default App;
