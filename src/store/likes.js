//action types
const LIKE = "LIKE";
const UNLIKE = "UNLIKE";

//action creators
const addLike = (id) => ({
  type: LIKE,
  payload: id,
});

const removeLike = (id) => ({
  type: UNLIKE,
  payload: id,
});

//reducers
const likeReducer = (likes = [], action) => {
  switch (action.type) {
    case LIKE:
      return [action.payload, ...likes];

    case UNLIKE:
      return likes.filter((item) => item.id !== action.payload);
    default:
      return likes;
  }
};

export { addLike, removeLike };
export default likeReducer;
