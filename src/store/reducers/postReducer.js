import * as Types from "../actions/types";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case Types.FETCH_POST:
      return action.payload.posts;
    case Types.CREATE_POST:
      let results = [...state];
      results.push(action.payload.posts);
      return results;
    default:
      return state;
  }
};

export default postReducer;
