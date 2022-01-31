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
import { ProfileCard } from '../styles/Profile.styled';

function Profile() {
  const { user, likes, bookmarks } = useSelector((state) => state);

  return (
    <Container height="80vh">
      <MarginVertical>
        <Flex flexDirection="row" align="flex-start" justify="space-evenly">
          <ProfileCard>
            <div>
              <ImgAvatar width="150px" src={user.avatarUrl} alt="" />
            </div>
            <div>
              <h4>
                {user.username}
                {' '}
                (
                {user.joinDate}
                )
              </h4>
              <Flex flexDirection="column" align="center" justify="center">
                <Flex flexDirection="row" align="center" justify="center" mb="1em">
                  Favorites
                  (
                  {likes?.length}
                  )
                </Flex>
                <Flex flexDirection="row" align="center" mb="1em" justify="center">
                  Seenlist
                  (
                  {bookmarks?.length}
                  )
                </Flex>
              </Flex>
              <Flex flexDirection="row" align="flex-start" justify="space-evenly">
                <a href={user.socials.twitter}>
                  <BsTwitter />
                </a>
                <a href={user.socials.instagram}>
                  <BsInstagram />
                </a>
              </Flex>
            </div>
          </ProfileCard>
          <ProfileTable />
        </Flex>
      </MarginVertical>
    </Container>
  );
}

export default Profile;
