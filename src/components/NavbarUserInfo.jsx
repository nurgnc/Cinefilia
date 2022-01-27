import React from 'react';
import { Link } from 'react-router-dom';
// redux
import { useSelector, useDispatch } from 'react-redux';
// icons
import { FiLogOut } from 'react-icons/fi';
// css
import { Grid } from '../styles/baseStyles';
import { ImgAvatar } from '../styles/Card.styled';
// default img
import { defaultImg } from '../api';
import { setLogin } from '../store/user';

function NavbarUserInfo() {
  const dispatch = useDispatch();
  const {
    user, isLogin,
  } = useSelector((state) => state);

  return (
    <Grid col={2}>
      {isLogin
        ? (
          <div>
            <Link to="/profile">
              <ImgAvatar src={user.avatarUrl} alt="" />
              <FiLogOut size={25} onClick={() => dispatch(setLogin(!isLogin))} />
            </Link>
          </div>
        )
        : (
          <div>
            <Link to="/login">
              <ImgAvatar src={defaultImg} alt="" />
            </Link>
          </div>
        )}
    </Grid>
  );
}

export default NavbarUserInfo;
