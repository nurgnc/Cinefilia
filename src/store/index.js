import { combineReducers, createStore } from "redux";
import likeReducer from "./likes";
import timeReducer from "./trendingTime";

const rootReducer = combineReducers({
  likes: likeReducer,
  time: timeReducer,
});

const store = createStore(rootReducer);

export default store;
