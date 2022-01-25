// action types
const LIKE = 'LIKE';
const UNLIKE = 'UNLIKE';

// action creators
const addLike = (id, title, img, releaseDate, genre) => ({
  type: LIKE,
  payload: {
    id, title, img, releaseDate, genre,
  },
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
