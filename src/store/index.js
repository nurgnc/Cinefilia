import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bookmarkReducer from './bookmarks';
import likeReducer from './likes';
import themeReducer from './theme';
import { userReducer, loginReducer } from './user';

const rootReducer = combineReducers({
  bookmarks: bookmarkReducer,
  likes: likeReducer,
  theme: themeReducer,
  user: userReducer,
  isLogin: loginReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'likes', 'bookmarks', 'isLogin'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
