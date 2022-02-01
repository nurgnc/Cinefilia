/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// redux
import { useSelector } from 'react-redux';
// routes data
import routes from './router';
import themes from './styles/themes';
import PrivateRoute from './PrivateRoute';
import { Navbar, Footer } from './components/base';
// css
import GlobalStyles from './styles/Global';

function App() {
  const { theme } = useSelector((state) => state);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          {routes.map((item, index) => (
            <Route key={index} path={item.path} element={<item.element />} />
          ))}
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
