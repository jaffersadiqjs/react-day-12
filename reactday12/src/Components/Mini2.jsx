import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Project2 = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  return (
    <div>
      <h2>Mini Project-2</h2>
      <p>{isLoggedIn ? 'Welcome back, user!' : 'Please log in.'}</p>
      <button onClick={toggleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  );
};

export default Project2;