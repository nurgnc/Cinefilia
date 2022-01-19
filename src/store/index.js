import { combineReducers, createStore } from "redux";
import likeReducer from "./likes";

const rootReducer = combineReducers({
  likes: likeReducer,
});

const store = createStore(rootReducer);

export default store;
