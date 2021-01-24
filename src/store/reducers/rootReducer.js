import { combineReducers } from "redux";

import authReducer from "./authReducer";
import currentUserReducer from "./currentUserRducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: currentUserReducer,
});

export default rootReducer;
