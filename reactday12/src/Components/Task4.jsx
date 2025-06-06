import React, { useContext } from 'react';
import MyContext from '../Contexts/MyContext';

const Task4 = () => {
  const { value } = useContext(MyContext);
  return (
    <div>
      <h2>Task-4</h2>
      <p>Context Value: {value}</p>
    </div>
  );
};

export default Task4;