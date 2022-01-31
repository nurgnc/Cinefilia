import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// icons
import { AiOutlineLogin } from 'react-icons/ai';
import { setLogin, setUser } from '../store/user';
import users from '../init_user.json';
// css
import { Container, Flex } from '../styles/baseStyles';
import {
  BgDark, FormContent, BgContent, UserNameContent, PasswordContent, LogInButton,
} from '../styles/LogIn.styled';
// gif
import login from '../assets/img/log-in.webp';

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
    <BgDark>
      <Container>
        <Flex flexDirection="row" justiy="space-evenly" align="center" height="80vh">
          <BgContent width="50%">
            <img src={login} alt="" />
          </BgContent>
          <FormContent width="40%">
            <h2>Please Login...</h2>
            <UserNameContent>
              <input
                type="text"
                value={name}
                placeholder="username"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </UserNameContent>
            <PasswordContent>
              <input
                type="password"
                placeholder="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </PasswordContent>

            <LogInButton type="submit" onClick={() => handleLogin(name, password)}>
              <AiOutlineLogin size={25} />
              Submit
            </LogInButton>
          </FormContent>
        </Flex>
      </Container>
    </BgDark>

  );
}

export default Login;
