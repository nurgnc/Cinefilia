// action types
const LIKE = 'LIKE';
const UNLIKE = 'UNLIKE';

// action creators
const addLike = (id) => ({
  type: LIKE,
  payload: id,
});

const removeLike = (id) => ({
  type: UNLIKE,
  payload: id,
});

// reducers
const likeReducer = (likes, action) => {
  const likeData = likes === undefined ? [] : likes;
  switch (action.type) {
    case LIKE:
      return [action.payload, ...likeData];

    case UNLIKE:
      return likeData.filter((item) => item.id !== action.payload);
    default:
      return likeData;
  }
};

export { addLike, removeLike };
export default likeReducer;
