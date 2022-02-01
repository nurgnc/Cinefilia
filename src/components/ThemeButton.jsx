import React from 'react';
// icons
import { BsFillMoonStarsFill, BsMoonStars } from 'react-icons/bs';
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
          <BsMoonStars size={25} />
        </ThemeButtons>
      ) : (
        <ThemeButtons type="button" theme={theme} onClick={() => dispatch(setTheme('dark'))}>
          <BsFillMoonStarsFill size={25} />
        </ThemeButtons>
      )}
    </section>
  );
}

export default ThemeButton;
