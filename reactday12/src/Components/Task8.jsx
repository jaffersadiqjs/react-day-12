import React, { useContext } from 'react';
import MyContext from '../Contexts/MyContext';

const DeepChild = () => {
  const { value } = useContext(MyContext);
  return <p>Deep Child Value: {value}</p>;
};

const Task8 = () => {
  return (
    <div>
      <h2>Task-8</h2>
      <DeepChild />
    </div>
  );
};

export default Task8;