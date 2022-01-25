// action types
const BOOKMARK = 'BOOKMARK';
const UNBOOKMARK = 'UNBOOKMARK';

// action creators
const addBookmark = (id, title, img, releaseDate, genre) => ({
  type: BOOKMARK,
  payload: {
    id, title, img, releaseDate, genre,
  },
});

const removeBookmark = (id) => ({
  type: UNBOOKMARK,
  payload: id,
});

// reducers
const bookmarkReducer = (bookmarks, action) => {
  const bookmarkData = bookmarks === undefined ? [] : bookmarks;
  switch (action.type) {
    case BOOKMARK:
      return [action.payload, ...bookmarkData];
    case UNBOOKMARK:
      return bookmarkData.filter((item) => item.id !== action.payload);
    default:
      return bookmarkData;
  }
};

export { addBookmark, removeBookmark };
export default bookmarkReducer;
