import React, { useContext } from 'react';
import MyContext from '../Contexts/MyContext';


const Task7 = () => {
  const { value } = useContext(MyContext);
  return (
    <div>
      <h2>Task-7</h2>
      <p>Dynamic Value: {value}</p>
    </div>
  );
};

export default Task7;