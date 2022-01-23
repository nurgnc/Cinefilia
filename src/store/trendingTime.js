// action types
const TIME_WINDOW = 'TIME_WINDOW';

// action creators
const setTime = (timeWindow) => ({
  type: TIME_WINDOW,
  payload: timeWindow,
});

// reducers
const timeReducer = (action, time = 'day') => {
  switch (action.type) {
    case TIME_WINDOW:
      return action.payload;
    default:
      return time;
  }
};

export default timeReducer;
export { setTime };
