import React from 'react';
// icons
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../store/theme';
// css
import { ThemeButtons } from '../styles/Navbar.styled';

function ThemeButton() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  return (
    <section>
      {theme === 'dark' ? (
        <ThemeButtons type="button" theme={theme} onClick={() => dispatch(setTheme('light'))}>
          <MdOutlineDarkMode size={25} />
        </ThemeButtons>
      ) : (
        <ThemeButtons type="button" theme={theme} onClick={() => dispatch(setTheme('dark'))}>
          <MdDarkMode size={25} />
        </ThemeButtons>
      )}
    </section>
  );
}

export default ThemeButton;
