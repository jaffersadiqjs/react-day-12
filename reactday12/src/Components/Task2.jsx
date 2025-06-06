
import React, { createContext } from 'react';

export const MyNewContext = createContext("Default Value");

const Task2 = () => {
  return (
    <div>
      <h2>Task-2</h2>
      <p>Context created using React.createContext(). Default value: "Default Value"</p>
    </div>
  );
};

export default Task2;
