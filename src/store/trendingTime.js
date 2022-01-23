// action types
const TIME_WINDOW = 'TIME_WINDOW';

// action creators
const setTime = (timeWindow) => ({
  type: TIME_WINDOW,
  payload: timeWindow,
});

// reducers
const timeReducer = (time, action) => {
  switch (action.type) {
    case TIME_WINDOW:
      return action.payload;
    default:
      return time === undefined ? 'day' : time;
  }
};

export default timeReducer;
export { setTime };
