import React from 'react';
// redux
import { useSelector } from 'react-redux';
// icons
import { BsTwitter, BsInstagram } from 'react-icons/bs';
// css
import { Flex, Grid } from '../styles/baseStyles';
import { ImgAvatar } from '../styles/Card.styled';

function NavbarUserInfo() {
  const { user, likes, bookmarks } = useSelector((state) => state);
  // console.log('user---------', user);
  return (
    <Grid col={2}>
      <div>
        <h4>
          {user.username}
          {' '}
          (
          {user.joinDate}
          )
        </h4>
        <Flex>
          <p>
            Favorites
            (
            {likes?.length}
            ),
            {' '}
          </p>
          <p>
            Seenlist
            (
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
        </Flex>
      </div>
      <div>
        <ImgAvatar src={user.avatarUrl} alt="" />
      </div>
    </Grid>

  );
}

export default NavbarUserInfo;
