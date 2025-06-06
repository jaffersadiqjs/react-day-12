import React, { useContext } from 'react';
import { CounterContext } from '../Contexts/CounterContext';

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);
  return <p>Current Count: {count}</p>;
};

const CounterControls = () => {
  const { increment } = useContext(CounterContext);
  return <button onClick={increment}>Increment</button>;
};

const Project3 = () => {
  return (
    <div>
      <h2>Mini Project-3</h2>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
};

export default Project3;
