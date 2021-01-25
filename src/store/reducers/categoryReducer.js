import * as Types from "../actions/types";

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case Types.FETCH_CATEGORY:
      return action.payload.categories;
    default:
      return state;
  }
};

export default categoryReducer;
