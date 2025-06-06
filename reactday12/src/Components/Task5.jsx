import React, { useContext } from 'react';
import MyContext from '../Contexts/MyContext';


const Sibling1 = () => {
  const { value } = useContext(MyContext);
  return <p>Sibling1 reads: {value}</p>;
};

const Sibling2 = () => {
  const { value } = useContext(MyContext);
  return <p>Sibling2 reads: {value}</p>;
};

const Task5 = () => {
  return (
    <div>
      <h2>Task-5</h2>
      <Sibling1 />
      <Sibling2 />
    </div>
  );
};

export default Task5;