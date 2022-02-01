import React from 'react';
import { Link } from 'react-router-dom';
// redux
import { useSelector, useDispatch } from 'react-redux';
// icons
import { AiOutlineLogout } from 'react-icons/ai';
// componets
import ThemeButton from './ThemeButton';
import NavbarSearch from './NavbarSearch';
// css
import { Grid, Flex } from '../styles/baseStyles';
import { ImgAvatar } from '../styles/Card.styled';
import { LogOutButton } from '../styles/Navbar.styled';
// default img
import defaultImg from '../assets/img/defaultImg.jpg';
import { setLogin } from '../store/user';

function NavbarUserInfo() {
  const dispatch = useDispatch();
  const {
    user, isLogin,
  } = useSelector((state) => state);

  return (
    <Grid>
      {isLogin
        ? (
          <Flex flexDirection="row" align="center" justify="center">
            <Flex flexDirection="row" align="center" justify="center">
              <NavbarSearch />
              <ThemeButton />
              <LogOutButton onClick={() => dispatch(setLogin(!isLogin))}>
                <AiOutlineLogout size={25} />
              </LogOutButton>
            </Flex>
            <Link to="/profile">
              <ImgAvatar width="100px" src={user.avatarUrl} alt="" />
            </Link>
          </Flex>
        )
        : (
          <Flex flexDirection="row" align="center" justify="center">
            <ThemeButton />
            <Link to="/login">
              <ImgAvatar width="100px" src={defaultImg} alt="" />
            </Link>
          </Flex>
        )}
    </Grid>
  );
}

export default NavbarUserInfo;
