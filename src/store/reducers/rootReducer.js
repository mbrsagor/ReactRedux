import { combineReducers } from "redux";

import authReducer from "./authReducer";
import currentUserReducer from "./currentUserRducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: currentUserReducer,
  posts: postReducer,
});

export default rootReducer;
