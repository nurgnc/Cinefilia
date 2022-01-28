import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin, setUser } from '../store/user';
import users from '../init_user.json';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state);
  const navigate = useNavigate();

  function handleLogin(username, userPassword) {
    const user = users.filter((item) => item.username === username)[0];
    if (userPassword === user.password) {
      dispatch(setUser(user));
      dispatch(setLogin(!isLogin));
      navigate('/');
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
