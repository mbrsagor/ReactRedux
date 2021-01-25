import { combineReducers } from "redux";

import authReducer from "./authReducer";
import currentUserReducer from "./currentUserRducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: currentUserReducer,
  categories: categoryReducer,
});

export default rootReducer;
