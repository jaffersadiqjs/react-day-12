import React from 'react';
import MyContext from '../Contexts/MyContext';

const Task3 = () => {
  return (
    <MyContext.Provider value={{ value: "Provided from Task3" }}>
      <div>
        <h2>Task-3</h2>
        <p>Value provided to context from Task3.</p>
      </div>
    </MyContext.Provider>
  );
};

export default Task3;