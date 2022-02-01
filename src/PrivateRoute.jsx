/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Login from './pages/Login';

function PrivateRoute() {
  const { isLogin } = useSelector((state) => state);

  return isLogin ? <Outlet /> : <Login />;
}

export default PrivateRoute;
