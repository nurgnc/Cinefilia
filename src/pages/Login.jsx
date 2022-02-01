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
  const { isLogin } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const user = users.filter((item) => item.username === name)[0];
    if (password === user.password) {
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
          <form action="">
            <FormContent width="100%">
              <h2>Please Login...</h2>
              <UserNameContent>
                <input
                  type="username"
                  value={name}
                  placeholder="username"
                  pattern="[A-Za-z0-9]{3,15}"
                  title="letters and numbers only, no , space and special characters, 3-15"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </UserNameContent>
              <PasswordContent>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  pattern="[^\s]{8,}"
                  title="no space, min 8 character"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </PasswordContent>
              <LogInButton type="submit" onClick={(e) => handleLogin(e)}>
                <AiOutlineLogin size={25} />
                Submit
              </LogInButton>

            </FormContent>
          </form>
        </Flex>
      </Container>
    </BgDark>
  );
}

export default Login;
