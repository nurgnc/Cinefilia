import { combineReducers, createStore } from "redux";
import likeReducer from "./likes";
import timeReducer from "./trendingTime";
import themeReducer from "./theme";

const rootReducer = combineReducers({
  likes: likeReducer,
  time: timeReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
