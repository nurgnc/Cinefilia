// action types
const THEME = 'THEME';

// action creators
const setTheme = (theme) => ({
  type: THEME,
  payload: theme,
});

// reducers
const themeReducer = (theme, action) => {
  switch (action.type) {
    case THEME:
      return action.payload;
    default:
      return theme === undefined ? 'light' : theme;
  }
};

export default themeReducer;
export { setTheme };
