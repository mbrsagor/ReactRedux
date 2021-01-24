import * as Types from "../actions/types";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case Types.FETCH_POST:
      return action.payload.posts;
    default:
      return state;
  }
};

export default postReducer;
