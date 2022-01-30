import React from 'react';
import { useSelector } from 'react-redux';
// icons
import { BsTwitter, BsInstagram } from 'react-icons/bs';
// components
import { ProfileTable } from '../components';
// css
import {
  Container, MarginVertical, Flex,
} from '../styles/baseStyles';
import { ImgAvatar } from '../styles/Card.styled';

function Profile() {
  const { user, likes, bookmarks } = useSelector((state) => state);

  return (
    <Container>
      <MarginVertical>
        <Flex flexDisrection="row" align="center">
          <div>
            <ImgAvatar src={user.avatarUrl} alt="" />
          </div>
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
            </Flex>
          </div>
        </Flex>

      </MarginVertical>
      <MarginVertical>
        <ProfileTable />
      </MarginVertical>
    </Container>
  );
}

export default Profile;
