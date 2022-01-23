// action types
const THEME = 'THEME';

// action creators
const setTheme = (theme) => ({
  type: THEME,
  payload: theme,
});

// reducers
const themeReducer = (action, theme = 'dark') => {
  switch (action.type) {
    case THEME:
      return action.payload;
    default:
      return theme;
  }
};

export default themeReducer;
export { setTheme };
