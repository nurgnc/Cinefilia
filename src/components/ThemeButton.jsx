import React from 'react';
// icons
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../store/theme';

function ThemeButton() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  return (
    <section>
      {theme === 'dark' ? (
        <button type="button" onClick={() => dispatch(setTheme('light'))}>
          <MdOutlineDarkMode size={25} />
        </button>
      ) : (
        <button type="button" onClick={() => dispatch(setTheme('dark'))}>
          <MdDarkMode size={25} />
        </button>
      )}
    </section>
  );
}

export default ThemeButton;
