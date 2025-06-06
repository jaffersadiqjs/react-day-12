import React, { useContext } from 'react';
import MyContext from '../Contexts/MyContext';

const Task9 = () => {
  const { value, setValue } = useContext(MyContext);
  return (
    <div>
      <h2>Task-9</h2>
      <p>Value: {value}</p>
      <button onClick={() => setValue("Updated from Task9")}>Update</button>
    </div>
  );
};

export default Task9;