import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../store/user';
// import { setUser } from '../store/user';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { user, isLogin } = useSelector((state) => state);
  const navigate = useNavigate();

  function handleLogin(username, userPassword) {
    if (username === user.username && userPassword === user.password) {
      dispatch(setLogin(!isLogin));
      navigate('/');
      setName('');
      setPassword('');
      document.getElementsByTagName('input').value = '';
    }
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="username"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={() => handleLogin(name, password)}>
        Submit
      </button>
    </div>
  );
}

export default Login;
