// action types
const CATEGORY = 'CATEGORY';

// action creators
const setCategory = (theme) => ({
  type: CATEGORY,
  payload: theme,
});

// reducers
const categoryReducer = (category, action) => {
  switch (action.type) {
    case CATEGORY:
      return action.payload;
    default:
      return category === undefined ? 'popular' : category;
  }
};

export default categoryReducer;
export { setCategory };
