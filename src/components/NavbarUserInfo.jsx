import React from 'react';
import { Link } from 'react-router-dom';
// redux
import { useSelector, useDispatch } from 'react-redux';
// icons
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
// css
import { Flex, Grid } from '../styles/baseStyles';
import { ImgAvatar } from '../styles/Card.styled';
// default img
import { defaultImg } from '../api';
import { setLogin } from '../store/user';

function NavbarUserInfo() {
  const dispatch = useDispatch();
  const {
    user, likes, bookmarks, isLogin,
  } = useSelector((state) => state);
  console.log('isLogin---------', isLogin);

  return (
    <Grid col={2}>
      {isLogin
        ? (
          <>
            <div>
              <Link to="/profile">
                <h4>
                  {user.username}
                  {' '}
                  (
                  {user.joinDate}
                  )
                </h4>
              </Link>
              <Flex>
                <p>
                  Favorites(
                  {likes?.length}
                  )
                </p>
                <p>
                  Seenlist(
                  {bookmarks?.length}
                  )
                </p>
              </Flex>
              <Flex>
                <a href={user.socials.twitter}>
                  <BsTwitter />
                </a>
                <a href={user.socials.instagram}>
                  <BsInstagram />
                </a>
                <button type="button">
                  <FiLogOut size={25} onClick={() => dispatch(setLogin(false))} />
                </button>
              </Flex>
            </div>
            <div>
              <Link to="/profile">
                <ImgAvatar src={user.avatarUrl} alt="" />
              </Link>
            </div>

          </>
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
