import React from 'react';
// redux
import { useSelector } from 'react-redux';

function NavbarUserInfo() {
  const { user } = useSelector((state) => state);
  console.log('user---------', user);
  return (
    <h1>user</h1>
  );
}

export default NavbarUserInfo;
