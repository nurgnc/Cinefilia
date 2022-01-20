//action types
const TIME_WINDOW = "TIME_WINDOW";

//action creators
const setTime = (time_window) => ({
  type: TIME_WINDOW,
  payload: time_window,
});

//reducers
const timeReducer = (time = "day", action) => {
  switch (action.type) {
    case TIME_WINDOW:
      return action.payload;
    default:
      return time;
  }
};

export default timeReducer;
export { setTime };
