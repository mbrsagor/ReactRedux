import * as Types from "../actions/types";

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case Types.FETCH_CATEGORY:
      return action.payload.categories;
    case Types.CREATE_CATEGORY:
      return {
        ...state,
        categories: [state.categories, action.payload],
      };
    default:
      return state;
  }
};

export default categoryReducer;
