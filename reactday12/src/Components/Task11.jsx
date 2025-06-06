import React, { useContext } from 'react';
import MyContext from '../Contexts/MyContext';

const Task11 = () => {
  const { value } = useContext(MyContext);
  return (
    <div>
      <h2>Task-11</h2>
      {value === 'Hello from Context' ? <p>Welcome!</p> : <p>Goodbye!</p>}
    </div>
  );
};

export default Task11;