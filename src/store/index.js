import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bookmarkReducer from './bookmarks';
import likeReducer from './likes';
import themeReducer from './theme';
import userInfo from './initUser';

const rootReducer = combineReducers({
  bookmarks: bookmarkReducer,
  likes: likeReducer,
  theme: themeReducer,
  user: userInfo,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'user', 'likes', 'bookmarks'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
