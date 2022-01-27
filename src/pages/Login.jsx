import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../store/user';
// import { setUser } from '../store/user';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const navigate = useNavigate();

  function handleLogin(username, userPassword) {
    if (username === user.username && userPassword === user.password) {
      console.log('if');
      dispatch(setLogin(true));
      navigate('/');
    }
    return console.log('false');
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="username"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={() => handleLogin(name, password)}>
        Submit
      </button>
    </div>
  );
}

export default Login;
